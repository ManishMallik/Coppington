import React, { useState } from 'react';
import '../styles/Popup.css';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';

import house0a from '../assets/house0a.webp'
import house1a from '../assets/house1a.webp'
import house2a from '../assets/house2a.webp'
import house3a from '../assets/house3a.webp'
import house4a from '../assets/house4a.webp'
import house5a from '../assets/house5a.webp'

import house0b from '../assets/house0b.webp'
import house1b from '../assets/house1b.webp'
import house2b from '../assets/house2b.webp'
import house3b from '../assets/house3b.webp'
import house4b from '../assets/house4b.webp'
import house5b from '../assets/house5b.webp'

import house0c from '../assets/house0c.webp'
import house1c from '../assets/house1c.webp'
import house2c from '../assets/house2c.webp'
import house3c from '../assets/house3c.webp'
import house4c from '../assets/house4c.webp'
import house5c from '../assets/house5c.webp'

const house0array = [house0a, house1a, house2a, house3a, house4a, house5a]
const house1array = [house0b, house1b, house2b, house3b, house4b, house5b]
const house2array = [house0c, house1c, house2c, house3c, house4c, house5c]

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
                    <img className="image" src={house0array[listing.id]} alt="Property Image 1" />
                    <img className="image" src={house1array[listing.id]} alt="Property Image 2" />
                    <img className="image" src={house2array[listing.id]} alt="Property Image 2" />
                </div>
                <div className="listing-info">
                    <div className="listing-title">
                        <div className="address-container">
                            <h1>{listing.address}</h1>
                            <h2>${listing.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h2>
                        </div>
                        <div className="bedroom-container">
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
                        </div>
                    </div>
                    <div className="bottom-info">
                        <div className="token-info">
                            <div className="stats">
                                <div className="stat">
                                    <p>Available Tokens: {listing.tokensAvailable}</p>
                                </div>
                                <div className="stat">
                                    <p>Total Tokens: {listing.totalTokens.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
                                </div>
                                <div className="stat">
                                    <p>Price per Token: ${(listing.price / listing.totalTokens).toFixed(2)}</p>
                                </div>
                                <div className="stat">
                                    <p>Predicted APY: {listing.predictedAPY}%</p>
                                </div>
                            </div>
                            <div className="investment-input">
                                <label htmlFor="tokensToInvest">Tokens to Invest:</label>
                                <div className="slider-box">
                                    <Slider defaultValue={10} aria-label="Default" valueLabelDisplay="auto" />
                                </div>
                                
                                {/* <input
                                    type="number"
                                    id="tokensToInvest"
                                    value={tokensToInvest}
                                    onChange={(e) => setTokensToInvest(e.target.value)}
                                /> */}
                                <button className="invest-button" onClick={null}>
                                    {'Invest'}
                                </button>
                            </div>  
                        </div>
                        <div className="combined-box">
                            <div className="investment-score">
                                <Typography variant="h4">
                                    Investment Score:&ensp;
                                </Typography>
                                <Typography variant="h4" color={calculateColorHex((listing.score).toFixed(1))}>
                                    {(listing.score).toFixed(1)}
                                </Typography>
                            </div>
                            <div className="house-description">
                                {listing.description}
                            </div>
                        </div>
                        
                    </div>
                    
                </div>
            </div>
        </div>
    );
}

export default Popup;
