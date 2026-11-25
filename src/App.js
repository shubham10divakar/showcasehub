import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './site/site.css';
import { ThemeProvider } from './site/theme';
import Backdrop from './site/three/Backdrop';
import { Nav, Footer } from './site/Layout';
import Home from './site/pages/Home';
import Research from './site/pages/Research';
import OpenSource from './site/pages/OpenSource';
// PDFDesk page hidden for now (being renamed StudyDesk). File kept at ./site/pages/PdfDesk.js.
import Apps from './site/pages/Apps';
import Games from './site/pages/Games';
import Writing from './site/pages/Writing';
import Achievements from './site/pages/Achievements';
import About, { NotFound } from './site/pages/About';
import HarvestHome, { HarvestPrivacy, HarvestDeleteAccount, HarvestSupport, HarvestTerms } from './site/pages/HarvestHome';
import LostBirdPrivacyPolicy from './components/pages/LostBirdPrivacyPolicy';

const to = (path) => <Navigate to={path} replace />;

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Backdrop />
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/research" element={<Research />} />
          <Route path="/opensource" element={<OpenSource />} />
          <Route path="/pdfdesk" element={to('/opensource')} />
          <Route path="/apps" element={<Apps />} />
          <Route path="/games" element={<Games />} />
          <Route path="/writing" element={<Writing />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/about" element={<About />} />
          {/* Harvest Home: the privacy and delete-account URLs go into Play Console, keep them stable. */}
          <Route path="/harvesthome" element={<HarvestHome />} />
          <Route path="/harvesthome/privacy" element={<HarvestPrivacy />} />
          <Route path="/harvesthome/delete-account" element={<HarvestDeleteAccount />} />
          <Route path="/harvesthome/support" element={<HarvestSupport />} />
          {/* The game links here (Help & more → Terms of use, since 1.6.0): keep this URL stable. */}
          <Route path="/harvesthome/terms" element={<HarvestTerms />} />
          {/* Linked from the Play Store listing: this URL must not change. */}
          <Route path="/lostbirdprivacypolicy" element={<div className="privacy-wrap"><LostBirdPrivacyPolicy /></div>} />

          {/* Old addresses keep working. */}
          <Route path="/showcasehub" element={to('/')} />
          <Route path="/publications/*" element={to('/research')} />
          <Route path="/myworks" element={to('/opensource')} />
          <Route path="/projectdetails/*" element={to('/opensource')} />
          <Route path="/portfolio" element={to('/about')} />
          <Route path="/aboutme" element={to('/about')} />
          <Route path="/awards/*" element={to('/achievements')} />
          <Route path="/playgames" element={to('/games')} />
          <Route path="/games/dino" element={to('/games')} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
