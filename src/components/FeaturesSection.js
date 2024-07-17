import React from 'react';
import Icon from './../assets/SVG/icon.svg';

const FeaturesSection = () => {
  return (
    <section className="text-center p-5">
      <div>
        <h2 className="display-5">Light, Fast & Powerful</h2>
        <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
      </div>
      <div className="d-flex justify-content-around my-4">
        <div className="text-center">
          <img src={Icon} alt="Icon 1" className="mb-3" />
          <h3>Title Goes Here</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
        </div>
        <div className="text-center">
          <img src={Icon} alt="Icon 2" className="mb-3" />
          <h3>Title Goes Here</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
        </div>
      </div>
      <div>
        <img src="./../assets/feature-image.png" alt="Illustration" className="img-fluid" />
      </div>
    </section>
  );
};

export default FeaturesSection;
