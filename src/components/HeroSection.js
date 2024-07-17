import React from 'react';
import hero from './../assets/SVG/hero.svg';

const HeroSection = () => {
  return (
    <section className="d-flex justify-content-between align-items-center p-5 bg-light">
      <div>
        <h1 className="display-4">Introduce Your Product Quickly & Effectively</h1>
        <p className="lead" style={{ color: '#505F98' }}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus 
        mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>
        <div>
          <button className="btn btn-primary me-2">Purchase UI Kit</button>
          <button className="btn btn-outline-primary">Learn More</button>
        </div>
      </div>
      <div>
        <img src={hero} alt="Illustration" className="img-fluid" />
      </div>
    </section>
  );
};

export default HeroSection;
