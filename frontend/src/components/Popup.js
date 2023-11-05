import React, { useState } from 'react';
import '../styles/Popup.css';

function calculateColorHex(value) {
    // Ensure the value is within the 0-100 range
    value = Math.min(100, Math.max(0, value));

    // Calculate the red and green components
    const redValue = 255 - (value * 200) / 100;
    const greenValue = (value * 200) / 100;

    // Convert the red and green values to hexadecimal
    const redHex = Math.round(redValue).toString(16).padStart(2, "0");
    const greenHex = Math.round(greenValue).toString(16).padStart(2, "0");

    // The blue component is always 0
    const blueHex = "00";

    // Combine the components to create the hex color
    const hexColor = `#${redHex}${greenHex}${blueHex}`;

    return hexColor;
}

function Popup({ listing, onClose }) {
    const [tokensToInvest, setTokensToInvest] = useState(0);
    const availableTokens = 1000; // Change this with the actual available tokens
    const totalTokens = 5000; // Change this with the actual total tokens
    const pricePerToken = 5; // Change this with the actual price per token

    return (
        <div className="popup">
            <div className="popup-content">
                <button className="close-button" onClick={onClose}>
                    {'< Back to Listings'}
                </button>
                <div className="images-container">
                    <img className="image" src="https://source.unsplash.com/random?wallpapers" alt="Property Image 1" />
                    <img className="image" src="https://source.unsplash.com/random?landscape" alt="Property Image 2" />
                    <img className="image" src="https://source.unsplash.com/random?landscape" alt="Property Image 2" />
                </div>
                <h1>{listing.address}</h1>
                <h2>${listing.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h2>
                <h3>
                    <span className="big-bold">
                        <strong>{listing.bedrooms}</strong> </span>
                    <span className="small-thin"> {"Bedrooms"}</span>

                    <span className="big-bold">
                        <strong>{listing.bathrooms}</strong> </span>
                    <span className="small-thin"> Bathrooms </span>

                    <span className="big-bold">
                        <strong>{listing.sqft.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</strong> </span>
                    <span className="small-thin"> Square Feet</span>
                </h3>
                <div className="stats">
                    <div className="stat">
                        <p>Available Tokens: {availableTokens}</p>
                    </div>
                    <div className="stat">
                        <p>Total Tokens: {totalTokens}</p>
                    </div>
                    <div className="stat">
                        <p>Price per Token: ${pricePerToken}</p>
                    </div>
                </div>
                <div className="investment-input">
                    <label htmlFor="tokensToInvest">Tokens to Invest:</label>
                    <input
                        type="number"
                        id="tokensToInvest"
                        value={tokensToInvest}
                        onChange={(e) => setTokensToInvest(e.target.value)}
                    />
                </div>
            </div>
        </div>
    );
}

export default Popup;