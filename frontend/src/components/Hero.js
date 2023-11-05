import React from 'react';
import '../styles/Hero.css';

const Hero = () => {
  return (
        <div className="hero-container">
          <div className="bg">
          </div>
          <div className="center">
            <div className="title">Unlocking Real Estate</div>
            <div className="subtitle">Leverage Blockchain to Reduce the Financial and Educational Barriers of Investing</div>
            <div className="btns">
              <a href="/TopPicks"><button className='left-button'>Top Picks</button></a>
              <a href="/Listings"><button className='right-button'>Listings</button></a>
            </div>
          </div>
        </div>
      )};

export default Hero;