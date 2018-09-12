import React from 'react';
import axios from 'axios';
import BlogCard from './BlogCard';

class LatestPosts extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      posts: []
    }
  }

  componentDidMount() {
    axios.get('https://blog.ashleydance.co.uk/wp-json/wp/v2/posts')
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
        <h2 className="center">My latest ramblings.</h2>
        {this.state.posts.map( post =>
          <BlogCard
            key={post.id}
            id={post.id}
            title={post.title.rendered}
            image="https://picsum.photos/600/200?random"
            slug={`/blog/${post.slug}`}
          />
        )}
      </div>
    )
  }

};

export default LatestPosts;