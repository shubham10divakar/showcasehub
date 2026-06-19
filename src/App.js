import './App.css';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AboutMe from './components/pages/AboutMe';
import Portfolio from './components/pages/Portfolio';
import ProjectDetails from './components/pages/ProjectDetails';
import NotFound from './components/pages/NotFound';
import MyWorks from './components/pages/MyWorks';
import AwardsPage from './components/AwardsPage';
import AwardDetailsPage from './components/AwardDetailsPage';
import PublicationsList from './components/pages/PublicationsList';
import PublicationDetail from './components/pages/PublicationDetail';
import GamesPage from './components/pages/GamesPage';
import DinoGamePlayer from './components/pages/DinoGame';
import AppsPage from './components/pages/AppsPage';
import LostBirdPrivacyPolicy from './components/pages/LostBirdPrivacyPolicy';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/showcasehub" element={<Home />} />
        <Route path="/aboutme" element={<AboutMe />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/publications" element={<PublicationsList />} />
        <Route path="/publications/:id" element={<PublicationDetail />} />
        <Route path='/myworks' element={<MyWorks />} />
        <Route path='/projectdetails/:id' element={<ProjectDetails />} />
        <Route path="/awards" element={<AwardsPage />} />
        <Route path="/awards/:id" element={<AwardDetailsPage />} />
        <Route path="/playgames" element={<GamesPage />} />
        <Route path="/games/dino" element={<DinoGamePlayer />} />
        <Route path="/apps" element={<AppsPage />} />
        <Route path="/lostbirdprivacypolicy" element={<LostBirdPrivacyPolicy />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
