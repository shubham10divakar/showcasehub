# Deploying subhamdivakar.com

| | |
|---|---|
| VPS | `187.127.154.73` (login: `root`) |
| Project on the server | `/opt/apps/myportfolio/showcasehub` |
| Folder nginx serves | `/opt/apps/myportfolio/showcasehub/build` |
| Code | `https://github.com/shubham10divakar/showcasehub` (branch `main`) |

Other apps in `/opt/apps` (do not touch): `freeaiagentwebsite`, `medivision-backend`, `medivisionwebsite`, `plantdocaiwebsite`.

---

## Option A: build on your PC, upload the build (recommended)

On your PC, in the project folder:

```
cd "D:\D\my docs\my docs\projects\React SPA for mydetails\Project\showcasehub"
git checkout main
npm run deploy:vps
```

It builds the site, uploads it to `/opt/apps/myportfolio/showcasehub/build_new`, then swaps that in for `build` in one step.
It asks for the VPS password 3 times. If a step fails, it stops and the live site is unchanged.
For a user other than root: `npm run deploy:vps -- <username>`.

Same steps by hand, if the script fails:

```
npm run build
ssh root@187.127.154.73 "rm -rf /opt/apps/myportfolio/showcasehub/build_new"
scp -r build root@187.127.154.73:/opt/apps/myportfolio/showcasehub/build_new
ssh root@187.127.154.73 "cd /opt/apps/myportfolio/showcasehub && mv build build_old && mv build_new build && rm -rf build_old"
```

## Option B: build on the server

Only if the server folder is a git clone of the GitHub repo. Check with:

```
ssh root@187.127.154.73
cd /opt/apps/myportfolio/showcasehub
git remote -v
```

If that shows the GitHub address: first push from your PC (`git push origin main`), then on the server:

```
cd /opt/apps/myportfolio/showcasehub
git pull origin main
npm install --legacy-peer-deps
npm run build
```

`--legacy-peer-deps` is needed: the 3D libraries' peer dependencies conflict without it.
nginx serves the new `build/` straight away, with no restart needed.

---

## Check it worked

Open (Ctrl+F5 to skip the browser cache):

- https://subhamdivakar.com/harvesthome
- https://subhamdivakar.com/harvesthome/privacy
- https://subhamdivakar.com/harvesthome/delete-account
- https://subhamdivakar.com/harvesthome/support

From a terminal, the bundle the live site loads should match your local `build/static/js/main.*.js`:

```
curl -s https://subhamdivakar.com/ | grep -o "static/js/main[^\"]*"
```

And the images should return 200, not 404:

```
curl -s -o /dev/null -w "%{http_code}\n" https://subhamdivakar.com/harvesthome-assets/logo/icon_64.png
```

## Useful server commands

```
ls -la /opt/apps/myportfolio/showcasehub/build                # what is live
ls /opt/apps/myportfolio/showcasehub/build/harvesthome-assets # Harvest Home images arrived
grep -rn -E "server_name|root " /etc/nginx/sites-enabled/ /etc/nginx/conf.d/   # which folder nginx serves
nginx -t && systemctl reload nginx                           # only after editing nginx config
```

## If something goes wrong

- **Old site still showing:** browser cache. Ctrl+F5 or a private window.
- **`/harvesthome` gives an nginx 404:** the server's nginx config needs `try_files $uri $uri/ /index.html;` in `location /` (see `nginx.conf` in this repo).
- **Permission denied on ssh:** wrong user or password.
- Do not put a real folder at `public/harvesthome/`: with `try_files $uri $uri/`, nginx would return 403 for the page. Harvest Home images live in `public/harvesthome-assets/`.

## After going live

Put these in Play Console for Harvest Home (keep them stable):

- Privacy policy: `https://subhamdivakar.com/harvesthome/privacy`
- Delete account: `https://subhamdivakar.com/harvesthome/delete-account`

