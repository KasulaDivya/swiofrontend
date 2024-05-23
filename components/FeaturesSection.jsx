// src/components/FeatureSection.js
//import React from 'react';
//import './FeatureSection.css';

// Import images
import themesImage1 from '../public/images/ThemeUI.png';
import themesImage2 from  '../public/images/ThemeUIActive.png';
import shareableImage1 from  '../public/images/bg1.png';
import shareableImage2 from  '../public/images/ArtSlowMagic.jpg';

const FeatureSection = () => {
    return (
        <div className="feature-section">
            <div className="feature-item">
                <div className="feature-text">
                    <h2>Change it up</h2>
                    <p>Switch between themes with just a click.</p>
                    <p>Modify the built-in themes or create your own using Sleeve’s extensive preferences.</p>
                </div>
                <div className="feature-images">
                    <img src={themesImage1} alt="Themes 1" className="feature-image" />
                    <img src={themesImage2} alt="Themes 2" className="feature-image" />
                </div>
            </div>
            <div className="feature-item">
                <div className="feature-text">
                    <h2>Shareable</h2>
                    <p>Export your themes and share them with friends using the handy new Sleeve Theme file format.</p>
                    <p>Install themes from anywhere with a double-click or a drag and drop.</p>
                </div>
                <div className="feature-images">
                    <img src={shareableImage1} alt="Shareable 1" className="feature-image" />
                    <img src={shareableImage2} alt="Shareable 2" className="feature-image" />
                </div>
            </div>
        </div>
    );
};

export default FeatureSection;
