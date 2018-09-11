import React from 'react'

const SinglePostContent = props => (
  <div className="container" dangerouslySetInnerHTML={{__html: props.content }}>
  </div>
);

export default SinglePostContent;