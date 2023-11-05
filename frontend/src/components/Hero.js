import React from 'react';
import '../styles/Hero.css';

const Hero = () => {
  return (
        <>
          <div className="bg">
          </div>
          <div className="center">
            <div className="title">Unlocking Real Estate</div>
            <div className="subtitle">We Leverage Blockchain Technology to Reduce the Financial and Educational Barriers into Real Estate Investments</div>
            <div className="btns">
              <a href="/TopPicks"><button className='left-button'>Top Picks</button></a>
              <a href="/Listings"><button className='right-button'>Listings</button></a>
            </div>
          </div>
        </>
      )};

export default Hero;