import logo from './logo.svg';
import './App.css';
import video from '../src/videos/video-1.mp4'
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
         <Route>
           <Route path="/showcasehub" element={<Home />} />
         </Route>
       </Routes>
      </Router>
    </>
  );

}

export default App;
