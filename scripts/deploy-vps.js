// Build the site and upload it to the VPS.
//
//   npm run deploy:vps            -> logs in as root
//   npm run deploy:vps -- ubuntu  -> logs in as "ubuntu"
//
// The new build is uploaded next to the live one and swapped in at the end,
// so visitors never see a half-uploaded site.
const { spawnSync } = require('child_process');

const HOST = '187.127.154.73';
const USER = process.argv[2] || process.env.VPS_USER || 'root';
const DIR = '/var/www/showcasehub';
const target = `${USER}@${HOST}`;

function run(cmd, args) {
  console.log(`\n> ${cmd} ${args.join(' ')}`);
  const r = spawnSync(cmd, args, { stdio: 'inherit', shell: cmd === 'npm' });
  if (r.status !== 0) {
    console.error(`\nStopped: "${cmd}" failed. The live site was not changed.`);
    process.exit(r.status || 1);
  }
}

run('npm', ['run', 'build']);
run('ssh', [target, `mkdir -p ${DIR} && rm -rf ${DIR}/build_new`]);
run('scp', ['-r', 'build', `${target}:${DIR}/build_new`]);
run('ssh', [target,
  `cd ${DIR} && rm -rf build_old && (mv build build_old 2>/dev/null || true) && mv build_new build && rm -rf build_old`]);

console.log(`\nDeployed to ${HOST}. Check https://subhamdivakar.com`);
