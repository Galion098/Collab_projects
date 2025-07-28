import React from 'react';

import { images } from '../../constants'; 
import './AboutUs.css';

const AboutUs = () => (
  <div className="app__aboutus app__bg flex__center section__padding" id="about">
  <div className="app__aboutus-overlay flex__center">
    <img src={images.G} alt="g letter" />
  </div>

  <div className="app__aboutus-content flex__center">
    <div className="app__aboutus-content_about">
      <h1 className="headtext__cormorant">About Us</h1>
      <img src={images.spoon} alt="about_spoon" className="spoon__img" />
      <p className="p__opensans">At the heart of every great meal is a story — and ours begins with a passion for flavor, family, and unforgettable moments. Welcome to a place where tradition meets taste, and every bite feels like home. </p>
      <button type="button" className="custom__button">Know More</button>
    </div>

    <div className="app__aboutus-content_knife flex__center">
      <img src={images.knife} alt="about_knife" />
    </div>

    <div className="app__aboutus-content_history">
      <h1 className="headtext__cormorant">Our History</h1>
      <img src={images.spoon} alt="about_spoon" className="spoon__img" />
      <p className="p__opensans">Born from a humble kitchen and a bold dream, our journey began with one simple belief — that good food has the power to bring people together. What started as a small idea has grown into a beloved destination, serving memories one plate at a time. </p>
      <button type="button" className="custom__button">Know More</button>
    </div>
  </div>
</div>
);

export default AboutUs;