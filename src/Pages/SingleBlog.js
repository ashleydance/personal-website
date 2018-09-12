import React from 'react'
import axios from 'axios'
import createDOMPurify from 'dompurify';
import Header from '../Base/Header';
import SinglePostContent from '../Components/SinglePostContent';
import LoadingCat from '../Components/LoadingCat';

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

      // Clean the data from WP Rest API
      const DOMPurify = createDOMPurify(window);
      const post = DOMPurify.sanitize(response.data.content.rendered);

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
        <div className="single-post-content">
          {this.state.loading ? (
            <LoadingCat />
          ) : (
            <SinglePostContent content={this.state.post}/>
          )}
        </div>
      </div>
    );
  }
};

export default SingleBlog;