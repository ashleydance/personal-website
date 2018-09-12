import React from 'react'
import '../scss/single-post-content.css';

const SinglePostContent = props => (
  <div className="container" dangerouslySetInnerHTML={{__html: props.content }}>
  </div>
);

export default SinglePostContent;