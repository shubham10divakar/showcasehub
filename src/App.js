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

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
         <Route>
         <Route path="/" element={<Home />} />
           <Route path="/showcasehub" element={<Home />} />
           {/* <Route path="/aboutme" element={<AboutMe />} />
           <Route path="/portfolio" element={<Portfolio />} />
           <Route path="/SignUp" element={<SignUp />} />
           <Route path='/awards' element={<Awards />} /> */}
           <Route path='/projects' element={<Projects />} />
           {/* <Route path='/products/:id' element={<Products />} /> */}
           <Route path='/projectdetails/:id' element={<ProjectDetails />} />
           {/* <Route path='/development' element={<Developments />} /> */}
           <Route path="*" element={<NotFound />} />
         </Route>
       </Routes>
      </Router>
    </>
  );

}

export default App;
