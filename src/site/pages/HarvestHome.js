import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Reveal, Ext, Lightbox } from '../ui';

// Harvest Home: the game's homepage plus the three pages Google Play links to.
// Text source of truth: harvesthome-pages/ (copied from store_kit/ in the game repo).
// The /harvesthome/privacy and /harvesthome/delete-account addresses go into
// Play Console: keep them stable.

const A = `${process.env.PUBLIC_URL}/harvesthome-assets`;
const EMAIL = 'divakarsubham8@gmail.com';
const SITE = 'https://subhamdivakar.com/harvesthome';
const MORE_GAMES = 'https://play.google.com/store/apps/developer?id=SubhamDivakar&hl=en_IN';
// Set this once the Play listing is live; until then the button says "Coming soon".
export const HARVEST_PLAY_URL = null; // 'https://play.google.com/store/apps/details?id=com.subham.harvesthome'

function useTitle(title) {
  useEffect(() => {
    const prev = document.title;
    document.title = title;
    window.scrollTo(0, 0);
    return () => { document.title = prev; };
  }, [title]);
}

const features = [
  { icon: 'buildings/house.png', title: 'One farm, your farm.', text: 'Everything you build stays: the fields, the barn, the animals. Nothing ever resets.' },
  { icon: 'characters/portraits_mira.png', title: 'A story in five chapters.', text: 'Spring, summer, autumn and winter, with Mira, Tomas and the people of the valley.', wide: true },
  { icon: 'crops/wheat.png', title: 'No timers to beat.', text: 'Every chapter takes as long as you like. Crops keep growing while you are away.' },
  { icon: 'animals/cow.png', title: 'Animals to care for.', text: 'Hens, a cow and a pig. Feed them and they give eggs, milk and truffles.' },
  { icon: 'buildings/barn.png', title: 'Grow your land.', text: 'Unlock new crops, upgrade the barn, buy more fields and open the east meadow.' },
  { icon: 'buildings/market.png', title: 'Visitors at your stall.', text: 'Villagers come by with requests and pay well.' },
  { icon: 'crops/seedbag.png', title: '43 objectives', text: 'to finish in the Farm Book, with diamonds as rewards.' },
  { icon: 'crops/strawberry.png', title: 'Play as a guest or save online.', text: 'Your farm can follow you to a new phone with an email or Google account.' },
];

const shots = [
  ['04_spring', 'Your farm in spring'],
  ['05_animals', 'Grandpa’s animals come home'],
  ['06_summer', 'A dry summer: water the fields'],
  ['07_autumn', 'Autumn and the Harvest Fair'],
  ['08_winter', 'The long winter'],
  ['09_market', 'The Market stall'],
  ['11_farm_book', 'The Farm Book: objectives and diamonds'],
  ['01_menu', 'The story so far'],
];

const story = [
  ['02_story_letter', 'The letter came on a grey morning'],
  ['03_story_journey', 'The long road to the valley'],
  ['12_mira', 'Mira, from the farm next door'],
];

const people = [
  ['mira', 'Mira', 'Your neighbour, who kept Grandpa’s animals safe.'],
  ['tomas', 'Tomas', 'From the village, with the orders.'],
  ['grandpa', 'Grandpa', 'Who planted the big tree the day you were born.'],
];

const facts = [
  ['Platform', 'Android (phones and tablets)'],
  ['Price', 'Free'],
  ['Ads', 'None'],
  ['In-app purchases', 'None'],
  ['Languages', 'English'],
  ['Made with', 'Godot Engine'],
  ['Developer', 'Subham Divakar'],
];

function PlayButton() {
  return HARVEST_PLAY_URL ? (
    <Ext href={HARVEST_PLAY_URL} className="btn btn-primary"><i className="fab fa-google-play" /> Get it on Google Play</Ext>
  ) : (
    <span className="btn btn-primary hh-soon" aria-disabled="true"><i className="fab fa-google-play" /> Coming soon to Google Play</span>
  );
}

function HHLinks() {
  return (
    <nav className="hh-links" aria-label="Harvest Home pages">
      <Link to="/harvesthome">Harvest Home</Link>
      <Link to="/harvesthome/privacy">Privacy policy</Link>
      <Link to="/harvesthome/delete-account">Delete your account</Link>
      <Link to="/harvesthome/support">Support</Link>
      <Ext href={MORE_GAMES}>More games ↗</Ext>
    </nav>
  );
}

export default function HarvestHome() {
  useTitle('Harvest Home – a cozy farming story');
  const [zoom, setZoom] = useState(null);

  return (
    <main className="page hh">
      <section className="hh-hero" style={{ '--hh-banner': `url(${A}/art/banner_spring_1920x640.jpg)` }}>
        <div className="hh-hero-text">
          <img src={`${A}/logo/icon_rounded_512.png`} alt="" className="hh-hero-icon" />
          <h1 className="hh-title">Harvest Home</h1>
          <p className="hh-sub">A cozy farming story through the seasons</p>
          <div className="btn-row">
            <PlayButton />
            <a href="#screens" className="btn btn-ghost">See the farm</a>
          </div>
        </div>
        <img src={`${A}/art/farm_island.png`} alt="Grandpa's farm: a small island of fields, a barn and a big tree" className="hh-island" />
      </section>

      <Reveal as="section" className="section hh-intro">
        <p className="hh-lead">
          Grandpa has left you his farm in the valley, and the bank wants its money. Plant, harvest and sell your way
          through your first year: pay the bank, bring Grandpa’s animals home, feed the village through a drought, win
          the Harvest Fair, and see every animal safely through the winter. Then the farm is yours to grow, season after season.
        </p>
        <div className="hh-story">
          {story.map(([f, cap]) => (
            <figure key={f}>
              <button type="button" className="photo" onClick={() => setZoom(`${A}/screenshots/${f}.jpg`)}>
                <img src={`${A}/screenshots/thumbs/${f}.jpg`} alt={cap} loading="lazy" />
              </button>
              <figcaption>{cap}</figcaption>
            </figure>
          ))}
        </div>
      </Reveal>

      <section className="section">
        <div className="section-head"><h2>What you do in the valley</h2></div>
        <div className="hh-features">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={(i % 4) * 70} className="card hh-feature">
              <img src={`${A}/${f.icon}`} alt="" className={f.wide ? 'hh-ficon hh-ficon-wide' : 'hh-ficon'} loading="lazy" />
              <p><strong>{f.title}</strong> {f.text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section" id="screens">
        <div className="section-head"><h2>Screenshots</h2><span className="muted">Tap to enlarge</span></div>
        <div className="hh-shots">
          {shots.map(([f, cap]) => (
            <figure key={f}>
              <button type="button" className="photo" onClick={() => setZoom(`${A}/screenshots/${f}.jpg`)}>
                <img src={`${A}/screenshots/thumbs/${f}.jpg`} alt={cap} loading="lazy" />
              </button>
              <figcaption>{cap}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <Reveal as="section" className="section">
        <div className="section-head"><h2>Meet the valley</h2></div>
        <div className="hh-people">
          {people.map(([id, name, text]) => (
            <div key={id} className="card hh-person">
              <img src={`${A}/characters/portraits_${id}.png`} alt={`${name}'s portrait`} loading="lazy" />
              <h3>{name}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </Reveal>

      <Reveal as="section" className="section hh-split">
        <div className="card">
          <h2>The facts</h2>
          <dl className="hh-facts">
            {facts.map(([k, v]) => (<React.Fragment key={k}><dt>{k}</dt><dd>{v}</dd></React.Fragment>))}
          </dl>
        </div>
        <div className="card hh-credits">
          <h2>Credits</h2>
          <p><strong>Art:</strong> 3D models by Kenney (<Ext href="https://kenney.nl">kenney.nl</Ext>), CC0: Nature Kit, Hexagon Kit, Fantasy Town Kit, Food Kit, Survival Kit, Mini Characters, Cube Pets, Game Icons. Coin icon from CraftPix.net.</p>
          <p><strong>Music</strong> (CC0, OpenGameArt.org): “Apple Cider” by Zane Little Music, “Fields of Cabbage” by ARoachIFoundOnMyPillow, “Cozy Puzzle” title and in-game themes by MintoDog.</p>
          <p><strong>Sound:</strong> Interface Sounds, Impact Sounds, RPG Audio and Music Jingles by Kenney (CC0).</p>
          <p><strong>Font:</strong> Fredoka by The Fredoka Project Authors (SIL Open Font License 1.1).</p>
          <p>Made with Godot Engine.</p>
        </div>
      </Reveal>

      <Reveal as="section" className="section band hh-band" style={{ '--hh-banner': `url(${A}/art/banner_autumn_1920x640.jpg)` }}>
        <div>
          <h2>Grandpa’s farm is waiting</h2>
          <p className="lede">Free, no ads, no in-app purchases.</p>
        </div>
        <PlayButton />
      </Reveal>

      <HHLinks />
      <Lightbox src={zoom} onClose={() => setZoom(null)} />
    </main>
  );
}

/* ---------- legal and help pages ---------- */

function LegalPage({ title, children }) {
  useTitle(`${title} – Harvest Home`);
  return (
    <main className="page hh">
      <article className="legal">
        <Link to="/harvesthome" className="legal-back">
          <img src={`${A}/logo/icon_64.png`} alt="" /> Harvest Home
        </Link>
        {children}
      </article>
      <HHLinks />
    </main>
  );
}

const Mail = ({ subject }) => (
  <a href={`mailto:${EMAIL}${subject ? `?subject=${encodeURIComponent(subject)}` : ''}`}><strong>{EMAIL}</strong></a>
);

export function HarvestPrivacy() {
  return (
    <LegalPage title="Privacy Policy">
      <h1>Harvest Home – Privacy Policy</h1>
      <p className="legal-meta"><strong>Effective date:</strong> 13 November 2026 (game version 1.3.0)</p>
      <p>This policy explains what information the game <strong>Harvest Home</strong> (“the game”) for Android, made by Subham Divakar (“I”, “me”), keeps, why, where it goes, and what you can do about it.</p>

      <div className="legal-summary">
        <h2>The short version</h2>
        <ul>
          <li>You can play without an account. Then your farm is saved only on your phone, the game never connects to the internet for it, and nothing about you is sent anywhere.</li>
          <li>If you choose to create an account, your email address and your farm’s save are stored online with Google Firebase, so your farm can follow you to another phone.</li>
          <li>There are no ads, no analytics, no crash reporting, no tracking and no in-app purchases. Your information is never sold, and never shared for advertising.</li>
          <li>You can delete your account and your online save at any time, in the game or by asking me.</li>
        </ul>
      </div>

      <h2>1. What is saved on your phone</h2>
      <p>The game keeps these files in its own private storage on your phone. Other apps cannot read them, they are not included in Android’s cloud backup, and uninstalling the game (or clearing its data) deletes them all.</p>
      <div className="legal-table"><table>
        <thead><tr><th>File</th><th>What is in it</th></tr></thead>
        <tbody>
          <tr><td>Your save (and one spare copy in case a file is damaged)</td><td>Your farm (coins, crops, animals, buildings, the farm day), the story so far, the names you gave your farmer and your farm, farm level, objectives and diamonds, sound settings, the game version, the times it was saved, and a random ID the game makes for your phone</td></tr>
          <tr><td>Sign-in file (only with an account)</td><td>Your account ID, your email address, how you signed in (email or Google) and a sign-in token, so you stay signed in. Deleted when you sign out</td></tr>
          <tr><td>Your farm after signing out (only with an account)</td><td>When you sign out, your farm is kept aside on the phone, so it comes back if you sign in again on this phone. The phone then starts a new guest farm. It is removed when you sign in again</td></tr>
        </tbody>
      </table></div>

      <h2>2. When the game uses the internet</h2>
      <ul>
        <li><strong>As a guest: never</strong> for your farm or your information.</li>
        <li><strong>With an account:</strong> the game talks only to Google Firebase, over encrypted connections (HTTPS):
          <ul>
            <li>to sign you in, keep you signed in, and send a password reset email when you ask for one (Firebase Authentication);</li>
            <li>to keep your save online (Cloud Firestore). While you are signed in, your save is uploaded automatically: when you open the game (the menu first downloads your online save and brings it together with the phone’s), at most every two minutes while you play, and when the game goes to the background.</li>
          </ul>
        </li>
        <li><strong>“Continue with Google”</strong> uses your phone’s own Google account picker (part of Android and Google Play services) to get a sign-in token from Google, which the game passes to Firebase.</li>
        <li><strong>Links:</strong> the “Game website” and “More games” buttons in the Credits open this website and the Google Play Store in your phone’s browser or Play Store app. The game itself sends nothing when you tap them.</li>
      </ul>

      <h2>3. What is stored online (only with an account)</h2>
      <p>Accounts are provided by <strong>Firebase Authentication</strong> and saves are stored in <strong>Cloud Firestore</strong>, both run by Google LLC on my behalf, on Google’s servers (which may be outside your country).</p>
      <div className="legal-table"><table>
        <thead><tr><th>Information</th><th>Where it comes from</th><th>Why</th></tr></thead>
        <tbody>
          <tr><td>Your email address</td><td>You type it, or it comes from your Google account with “Continue with Google”</td><td>To sign you in, and to send a password reset email if you ask for one</td></tr>
          <tr><td>Your password (email accounts only)</td><td>You type it</td><td>To sign you in. It is handled by Firebase and never seen or stored by me or by the game</td></tr>
          <tr><td>Your name, profile picture address and Google account ID (only with “Continue with Google”)</td><td>Your Google account; Firebase keeps them with the account</td><td>Firebase stores them as part of a Google sign-in. The game does not show or use them</td></tr>
          <tr><td>An account ID, and when the account was created and last signed in</td><td>Made by Firebase</td><td>To find your save and run the account</td></tr>
          <tr><td>Your save: everything listed under “Your save” in section 1</td><td>The game</td><td>To keep your farm online and bring it to your other phones</td></tr>
          <tr><td>One earlier copy of your online save</td><td>The game, each time it brings your phone and your online save together</td><td>So a farm can be restored if that ever goes wrong</td></tr>
        </tbody>
      </table></div>
      <p>Only your own account can read or change your online save: the database rules allow nobody else. I use this information only to run your account and keep your farm. Firebase may also keep technical logs (such as IP addresses) as part of running its service; see Google’s privacy policy at <Ext href="https://policies.google.com/privacy">https://policies.google.com/privacy</Ext> and Firebase’s privacy information at <Ext href="https://firebase.google.com/support/privacy">https://firebase.google.com/support/privacy</Ext>.</p>

      <h2>4. What the game does not do</h2>
      <ul>
        <li>No advertising and no advertising ID.</li>
        <li>No analytics, crash reporting or tracking tools.</li>
        <li>No access to your location, contacts, photos, files, camera or microphone. The game only asks Android for internet access.</li>
        <li>No chat or contact between players, and nothing you make is shown to other players.</li>
        <li>No selling, renting or sharing of your information with anyone for their own use.</li>
      </ul>

      <h2>5. How long information is kept</h2>
      <ul>
        <li><strong>On your phone:</strong> until you uninstall the game or clear its data.</li>
        <li><strong>Online:</strong> your account and online save are kept until you delete them. There is no automatic deletion of inactive accounts.</li>
      </ul>

      <h2>6. Deleting your account</h2>
      <ul>
        <li><strong>In the game:</strong> on the main menu, tap your email address at the top right, then <strong>Delete account</strong>, and tap it again to confirm. Your online save (and its earlier copy) is deleted first, then your account. If you have not signed in for a while, Firebase may ask you to sign in again first; then sign out, sign in, and tap Delete account again.</li>
        <li><strong>Without the game:</strong> follow the steps at <Link to="/harvesthome/delete-account">{SITE}/delete-account</Link>, or email <Mail subject="Delete my Harvest Home account" /> from the address you signed in with, with the subject “Delete my Harvest Home account”. I will delete the account and its online save within 30 days and reply when it is done.</li>
        <li><strong>What stays:</strong> the farm on your own phone stays as a guest farm (it is never sent anywhere) until you uninstall the game or clear its data.</li>
      </ul>

      <h2>7. Children</h2>
      <p>The game is meant for players aged 13 and over, and I do not knowingly collect personal information from children under 13. Anyone can play as a guest without giving any information. If you believe a child under 13 has created an account, contact me and I will delete it.</p>

      <h2>8. Your rights</h2>
      <p>Depending on where you live, you may have the right to see, correct, export or delete the information held about you, or to object to how it is used. To ask, email <Mail />. Deleting your account (section 6) removes everything held online.</p>

      <h2>9. Changes</h2>
      <p>If this policy changes, the new version will be posted on this page with a new effective date. Important changes will also be mentioned in the game’s update notes.</p>

      <h2>10. Contact</h2>
      <p>Subham Divakar<br />Email: <Mail /><br />Website: <Link to="/harvesthome">{SITE}</Link></p>
    </LegalPage>
  );
}

export function HarvestDeleteAccount() {
  return (
    <LegalPage title="Delete your account">
      <h1>Delete your Harvest Home account</h1>
      <p className="legal-meta"><strong>Harvest Home</strong> by <strong>Subham Divakar</strong></p>
      <p>You can delete your Harvest Home account and the farm saved online with it at any time.</p>

      <h2>Option 1: in the game (fastest)</h2>
      <ol>
        <li>Open Harvest Home.</li>
        <li>On the main menu, tap your email address at the top right.</li>
        <li>Tap <strong>Delete account</strong>, then tap it again to confirm.</li>
      </ol>
      <p>Your online save is deleted first, then your account, straight away. If the game says to sign in again first (Firebase asks this when you have not signed in for a while), tap <strong>Sign out</strong>, sign in again, and tap <strong>Delete account</strong> once more.</p>

      <h2>Option 2: without the game</h2>
      <p>Send an email to <Mail subject="Delete my Harvest Home account" />:</p>
      <ul>
        <li>from the email address you use to sign in (for “Continue with Google”, your Google account’s address),</li>
        <li>with the subject <strong>Delete my Harvest Home account</strong>.</li>
      </ul>
      <p>I will delete the account and its online save within 30 days and reply to confirm. I may ask you to confirm the request from that address first, so nobody else can delete your farm.</p>

      <h2>What is deleted</h2>
      <ul>
        <li>Your account: email address, account ID, password (email accounts), and for Google sign-in the name, picture address and Google account ID Google provided</li>
        <li>Your farm saved online, and the one earlier copy kept for safety</li>
      </ul>

      <h2>What is kept</h2>
      <ul>
        <li>Nothing is kept online.</li>
        <li>The farm on your own phone stays as a guest farm until you uninstall the game or clear its data. It is never sent anywhere.</li>
      </ul>
      <p>Players who never created an account have nothing stored online: uninstalling the game removes everything.</p>
      <p>More about your information: <Link to="/harvesthome/privacy">Privacy policy</Link></p>
    </LegalPage>
  );
}

const faqs = [
  ['How do I keep my farm when I change phones?', 'On the main menu, tap the chip at the top right and create an account (email or Google). Sign in with the same account on the new phone and your farm comes with you.'],
  ['I played on two phones. Which farm is kept?', 'Your level, objectives, diamonds and story are joined from both. The farm itself cannot be mixed, so the game asks once which phone’s farm to keep.'],
  ['Do crops grow while the game is closed?', 'Yes, for up to 8 hours away. The farm’s day count only moves while you play.'],
  ['Is there a time limit on chapters?', 'No. Each chapter takes as long as you like. If you are stuck, Mira will give you a hint.'],
  ['An animal walked off. Is it gone?', 'No animal ever dies. It went to Mira’s farm: bring its food to its spot and it comes home.'],
  ['I forgot my password.', 'On the sign-in screen, enter your email and tap “Forgot password”. A reset email is sent to you.'],
];

export function HarvestSupport() {
  return (
    <LegalPage title="Help">
      <h1>Harvest Home – Help</h1>
      <p className="legal-meta"><strong>Contact:</strong> <Mail subject="Harvest Home help" />. Please mention your phone model and what happened.</p>
      <h2>Common questions</h2>
      <div className="faq">
        {faqs.map(([q, a]) => (
          <details key={q}>
            <summary>{q}</summary>
            <p>{a}</p>
          </details>
        ))}
        <details>
          <summary>How do I delete my account?</summary>
          <p>See <Link to="/harvesthome/delete-account">Delete your account</Link>.</p>
        </details>
      </div>
    </LegalPage>
  );
}
