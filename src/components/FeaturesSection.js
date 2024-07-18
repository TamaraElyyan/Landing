import React from 'react';
import Icon from './../assets/SVG/icon.svg';
import feature from './../assets/SVG/feature.svg';
import './../CSS/FeaturesSection.css'

const FeaturesSection = () => {
  return (
    <section className="features-section bg-white text-dark">
      <div className="container">
        <div className="row align-items-center mb-5">
          <div className="col-md-6 text-column">
            <h2 className="medium-36">Light, Fast & Powerful</h2>
            <p className="regular-16 lead">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
            </p>
          </div>
          <div className="col-md-6">
            <img src={feature} alt="Illustration" className="img-fluid" />
          </div>
        </div>
        <div className="row text-center">
          <div className="col-md-6 col-lg-4 mb-4">
            <img src={Icon} alt="Icon 1" className="mb-3" />
            <h3>Title Goes Here</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor.</p>
          </div>
          <div className="col-md-6 col-lg-4 mb-4">
            <img src={Icon} alt="Icon 2" className="mb-3" />
            <h3>Title Goes Here</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;