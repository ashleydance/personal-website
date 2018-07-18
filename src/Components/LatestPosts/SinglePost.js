import React from 'react';
import { Link } from 'react-router-dom';
import '../../scss/single-post.css';

const SinglePost = props => {

  const styles = {
    backgroundImage: `url('${props.image}')`
  }

  return (
    <div className="single-post">
      <div className="image" style={styles}></div>
      <h3>{props.title}</h3>
      <Link className="btn" to={{
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