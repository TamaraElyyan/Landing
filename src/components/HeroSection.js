
import React from 'react';
import hero from '../assets/SVG/hero.svg';
import './../CSS/HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero-section d-flex justify-content-between align-items-center p-5 ">
      <div className="hero-text">
        <h1>Introduce Your Product Quickly & Effectively</h1>
        <p className="lead">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
        </p>
        <div className="btn-wrapper">
          <button className="btn btn-primary">Purchase UI Kit</button>
          <button className="btn btn-outline-primary">Learn More</button>
        </div>
      </div>
      <div className="hero-image">
        <img src={hero} alt="Illustration" className="img-fluid" />
      </div>
    </section>
  );
};

export default HeroSection;
