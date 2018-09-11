import React from 'react'
import Header from '../Base/Header';
import Footer from '../Base/Footer';

const NotFound = () => (
  <div>
    <Header title="Oops, 404 page not found!" />
      <div className="container">
        <p className="center">This site is currently being built.</p>
        <p className="center">You can follow along the progress on <a target="_blank" href="https://github.com/ashleydance/personal-website">Github</a></p>
      </div>
    <Footer />
  </div>
);

export default NotFound;