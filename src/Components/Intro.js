import React from 'react'
import '../scss/textblock.css';

const Intro = props => (
  <section className="intro-section">
    <h2>{props.title}</h2>
    <p>{props.text}</p>
  </section>
);

export default Intro;