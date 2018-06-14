import React, { Component } from 'react';
import axios from 'axios';
import SinglePost from './SinglePost';

class LatestPosts extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      posts: []
    }
  }

  componentDidMount() {
    axios.get('http://blog.ashleydance.co.uk/wp-json/wp/v2/posts')
    .then( response => {
      const posts = response.data
      this.setState({posts: posts});
    })
    .catch( error => {
      console.log(`Something went wrong! ${error}`);
    });
  }

  render() {
    return (
      <div>
        {this.state.posts.map( post =>
          <SinglePost
            key={post.id}
            title={post.title.rendered}
            slug={post.slug}
            blurb={post.excerpt.rendered.replace(/<(?:.|\n)*?>/gm, '')}
          />
        )}
      </div>
    )
  }


};

export default LatestPosts;