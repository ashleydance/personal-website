import React from 'react';
import '../scss/social-media.css';

const SocialMedia = props => (
  <div className="center social-media-block">
    <p>Stalk me!</p>
    <ul className="social-media-links">
      <li><a target="_blank" href={props.github}><i className="fab fa-github"></i></a></li>
      <li><a target="_blank" href={props.twitter}><i className="fab fa-twitter"></i></a></li>
      <li><a target="_blank" href={props.instagram}><i className="fab fa-instagram"></i></a></li>
      <li><a target="_blank" href={props.linkedin}><i className="fab fa-linkedin-in"></i></a></li>
    </ul>
  </div>
);

export default SocialMedia;