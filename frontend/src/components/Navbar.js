import React, { useState, useEffect } from 'react';
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <nav>
      <div className="menu">
        <div className="logo">
          <a href="/">Coppington</a>
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