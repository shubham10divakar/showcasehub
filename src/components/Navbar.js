import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { Avatar } from '@mui/material'; // Import Avatar component from Material-
import pic from '../images/channelLogo.png'

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          {/* <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            SubhamDivakar
            <i class='fab fa-typo3' />
          </Link> */}
          <Avatar
          alt="Subham Divakar"
          src={pic} // Replace with the actual path to your profile picture
          sx={{ width: 60, height: 60 }} // Adjust size as needed
          //className='avatar'
        />
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/showcasehub' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/myworks'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                MyWorks
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/playgames'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                PlayGames
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/aboutme'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                AboutMe
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/portfolio'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Portfolio
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/publications'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Publications
              </Link>
            </li>
          </ul>
                {button && <Button buttonStyle='btn--outline'>Awards</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
