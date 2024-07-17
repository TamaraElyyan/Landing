import React from 'react';
import '../CSS/Header.css';

const Header = () => {
  return (
    <header className="d-flex justify-content-between align-items-center p-3 border-bottom">
      <nav>
        <ul className="nav">
          <li className="nav-item"><a href="#" className="nav-link">Home</a></li>
          <li className="nav-item"><a href="#" className="nav-link">About</a></li>
          <li className="nav-item"><a href="#" className="nav-link">Contact</a></li>
        </ul>
      </nav>
      <div className="h3 h3-title">Landing</div>
      <button className="btn buy-now-btn">Buy Now</button>
    </header>
  );
};

export default Header;
