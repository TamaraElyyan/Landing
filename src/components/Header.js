import React from 'react';

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
      <div className="h3">Landing</div>
      <button className="btn btn-primary">Buy Now</button>
    </header>
  );
};

export default Header;
