import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <nav>
      <div className="menu">
        <div className="logo">
          <Link to="/">Coppington</Link>
        </div>
        <ul>
          {/* <li>
            <Link to="/Join" className={currentPath === '/Join' ? 'active' : ''}>Join</Link>
          </li> */}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;