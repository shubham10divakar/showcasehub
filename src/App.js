import logo from './logo.svg';
import './App.css';
import video from '../src/videos/video-1.mp4'
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Services from './components/pages/Portfolio';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';
import Awards from './components/pages/Awards';
import AboutMe from './components/pages/AboutMe';
import Portfolio from './components/pages/Portfolio';
import Projects from './components/pages/Projects';
import Developments from './pages/Developments';
import ProjectDetails from './components/pages/ProjectDetails';
import NotFound from './components/pages/NotFound';
import MyWorks from './components/pages/MyWorks';
import AwardsPage from './components/AwardsPage';
import AwardDetailsPage from './components/AwardDetailsPage';
import PublicationsList from './components/pages/PublicationsList';
import PublicationDetail from './components/pages/PublicationDetail';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
         <Route>
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
           <Route path="*" element={<NotFound />} />
         </Route>
       </Routes>
      </Router>
    </>
  );

}

export default App;
