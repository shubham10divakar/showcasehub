import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import { Avatar } from '@mui/material';
import pic from '../images/channelLogo.png';

function Navbar() {
  const [click, setClick] = useState(false);
  const location = useLocation();

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  useEffect(() => {
    closeMobileMenu();
  }, [location]);

  const navLinks = [
    { to: '/showcasehub', label: 'Home' },
    { to: '/myworks', label: 'My Works' },
    { to: '/portfolio', label: 'Portfolio' },
    { to: '/publications', label: 'Publications' },
    { to: '/playgames', label: 'Play Games' },
    { to: '/aboutme', label: 'About Me' },
  ];

  return (
    <nav className='navbar'>
      <div className='navbar-container'>
        <Link to='/showcasehub' className='navbar-brand' onClick={closeMobileMenu}>
          <Avatar alt="Subham Divakar" src={pic} sx={{ width: 38, height: 38 }} />
          <span className='navbar-brand-name'>Subham <span>Divakar</span></span>
        </Link>

        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>

        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          {navLinks.map(({ to, label }) => (
            <li className='nav-item' key={to}>
              <Link
                to={to}
                className={`nav-links${location.pathname === to ? ' active' : ''}`}
                onClick={closeMobileMenu}
              >
                {label}
              </Link>
            </li>
          ))}
          <li className='nav-item'>
            <Link to='/awards' className='nav-links-awards' onClick={closeMobileMenu}>
              Awards
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
