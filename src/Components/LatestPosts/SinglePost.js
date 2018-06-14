import React from 'react';

const SinglePost = props => {
  return (
    <div className="single-post">
      <h2>{props.title}</h2>
      <p>Content blurb goes here</p>
      <a href={'#' + props.slug}>Read More</a>
    </div>
  );
}

export default SinglePost;