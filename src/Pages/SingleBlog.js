import React from 'react'
import axios from 'axios'
import Header from '../Base/Header';

class SingleBlog extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      post: null,
      loading: true
    }
  }

  componentDidMount() {
    // Get the post ID from our router state
    const postID = this.props.location.state.postID

    // Get the post from the WP API
    axios.get(`http://blog.ashleydance.co.uk/wp-json/wp/v2/posts/${postID}`)
    .then( response => {
      const post = response.data
      this.setState({
        post: post,
        loading: false
      });
    })
    .catch( error => {
      console.log(`Something went wrong! ${error}`);
    });
  }

  render() {
    return (
      <div>
        <Header title={this.props.location.state.title} />
        <div className="container">
        {this.state.loading ? (
          <h2 className="center">Loading</h2>
        ) : (
          <div dangerouslySetInnerHTML={{__html: this.state.post.content.rendered}} />
        )}
        </div>
      </div>
    );
  }
};

export default SingleBlog;