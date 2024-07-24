import React from 'react';
import featureImage from './../../assets/SVG/feature.svg';
import './FeaturesSection';
import Icon from './../../assets/SVG/icon.svg';

const FeaturesSection = () => {
  return (
    <section className="features-section bg-white">
      <div className="container">
        <div className="row align-items-center mb-5">
          <div className="col-md-6">
            <h2 className="medium-36">Light, Fast & Powerful</h2>
            <p className="regular-16 mb-4 lead">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
            </p>
            <div className="row ">
              <div className="col-md-6 mb-4 col-left mt-5">
                <img src={Icon} alt="Icon 1" className="mb-3" />
                <h3>Title Goes Here</h3>
                <p p-box>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor.</p>
              </div>

              <div className="col-md-6 mb-4 col-right mt-5 ">
                <img src={Icon} alt="Icon 2" className="mb-3" />
                <h3>Title Goes Here</h3>
                <p p-box>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor.</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 text-center ">
            <div className="feature-image-container">
              <img src={featureImage} alt="Illustration" className="img-fluid feature-image" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
