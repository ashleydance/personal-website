import React from 'react';
import { Link } from 'react-router-dom';

const SinglePost = props => {
  return (
    <div className="single-post">
      <h2>{props.title}</h2>
      <p>Content blurb goes here</p>
      <Link to={{
        pathname: props.slug,
        state: {
          postID: props.id,
          title: props.title
        }
      }}>
        Read More
      </Link>
    </div>
  );
}

export default SinglePost;