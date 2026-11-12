# Changelog — ShowcaseHub

## [2026-05-15] — PM Highlight · Scholar Citations · Apps Section

### Live URL
https://shubham10divakar.github.io/showcasehub

---

### 1. PM Photos Highlight (Home page)
**Files:** `src/components/pages/PMHighlight.js`, `PMHighlight.css`

- New section between the hero and Featured Projects on the Home page
- Amber "National Honour 🇮🇳" badge at the top
- Heading: "Met the Prime Minister of India"
- Three SIH2019 photos (`src/images/SIH2019/`) displayed side-by-side in a mosaic
- Hover reveals expand icon; click any photo opens a fullscreen lightbox
- Caption: "Singapore India Hackathon 2019 · Organised by AICTE & Ministry of Education, India"

---

### 2. Google Scholar 100+ Citations
**Files:** `src/components/HeroSection.js`, `HeroSection.css`, `src/components/pages/PublicationsList.js`, `PublicationsList.css`

**Hero section (Home page)**
- Hero description updated to include "100+ Google Scholar citations"
- New "100+" stat tile added alongside Years Experience / Publications / Projects / Hackathon Wins
- The citations tile is a clickable `<a>` tag linking to the Scholar profile; number turns blue on hover

**Publications page (`/publications`)**
- Blue pill badge below the page heading: "100+ citations on Google Scholar →"
- Links to: https://scholar.google.com/citations?user=44ecZj0AAAAJ&hl=en&authuser=1

---

### 3. Apps Section (`/apps`)
**Files:** `src/components/pages/AppsPage.js`, `AppsPage.css`

- New route `/apps` added to `App.js`
- "Apps" link added to the Navbar (between Publications and Play Games)
- **Android Apps section:** ALICE Women Safety App card (image, tags, description, year, "View details" link)
- "More apps coming soon" placeholder card
- **Games section** (below a divider): Dino Runner playable inline via modal, Mario & Temple Run "Coming Soon"

---

### Files Changed
| File | Change |
|---|---|
| `src/App.js` | Added AppsPage import + `/apps` route |
| `src/components/Navbar.js` | Added "Apps" nav link |
| `src/components/pages/Home.js` | Added PMHighlight between HeroSection and ProjectCards |
| `src/components/pages/PMHighlight.js` | NEW — PM photos section with lightbox |
| `src/components/pages/PMHighlight.css` | NEW — styles for PM section |
| `src/components/pages/AppsPage.js` | NEW — Android apps + games page |
| `src/components/pages/AppsPage.css` | NEW — styles for Apps page |
| `src/components/HeroSection.js` | Added 100+ citations stat + updated description |
| `src/components/HeroSection.css` | Added `.hero-stat-link` and `.hero-stat-citations` styles |
| `src/components/pages/PublicationsList.js` | Added Scholar badge below page header |
| `src/components/pages/PublicationsList.css` | Added `.scholar-badge` and related styles |

---

### Git Commit
`9494dac` — Add PM highlight, Scholar citations, Apps section
