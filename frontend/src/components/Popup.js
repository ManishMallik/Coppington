import React from 'react';
import '../styles/Popup.css';

function Popup({ listing, onClose }) {

  return (
    <div className="popup-container">
      <div className="popup">
        <div className="popup-content">
        <div className="images-container">
          <img className="image" src="https://source.unsplash.com/random?wallpapers" alt="Property Image 1" />
          <img className="image" src="https://source.unsplash.com/random?landscape" alt="Property Image 2" />
        </div>
          <h2>${listing.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h2>
          <p>{listing.address}</p>
          <p>
            {listing.bedrooms} Beds | {listing.bathrooms} Baths | {listing.sqft.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} Square Feet
          </p>
          <p>
            Rating: {(Math.random() * 100).toFixed(1)}
          </p>
        </div>
      </div>
      <button className="close-button" onClick={onClose}>
        Close
      </button>
    </div>
  );
}

export default Popup;