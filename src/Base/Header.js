import React from 'react'
import { Link } from 'react-router-dom';
import '../scss/header.css';

const Header = () => (
  <header className="site-header">
    <div className="container">
      <ul className="menu">
        <li><Link to="/about">About</Link></li>
        <li><Link to="/blog">Blog</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </div>
    <h1>Ashley Dance</h1>
  </header>
);

export default Header;