import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css'

const NotFound = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Definitely Not 404</h1>
      <p>The page you are looking for is under development.</p>
      <Link to="/">Go to Home</Link>
    </div>
  );
};

export default NotFound;
