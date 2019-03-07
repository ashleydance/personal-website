import React from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
import createDOMPurify from 'dompurify'
import { Header } from '../Base/Header'
import Footer from '../Base/Footer'
import { SinglePostContent } from '../Components/SinglePostContent'
import { LoadingCat } from '../Components/LoadingCat'

export default class SingleBlog extends React.Component {
  state = {
    post: null,
    loading: true
  }

  componentDidMount () {
    // Get the post ID from our router state
    const postID = this.props.location.state.postID

    // Get the post from the WP API
    axios.get(`https://blog.ashleydance.co.uk/wp-json/wp/v2/posts/${postID}`)
      .then(response => {
        // Clean the data from WP Rest API
        const DOMPurify = createDOMPurify(window)
        const post = DOMPurify.sanitize(response.data.content.rendered)

        this.setState({
          post: post,
          loading: false
        })
      })
      .catch(error => {
        console.log(`Something went wrong! ${error}`)
      })
  }

  renderContent() {
    const { loading, post } = this.state
    if ( loading ) return <LoadingCat />
    return <SinglePostContent content={post} />
  }

  render () {
    return (
      <main>
        <Header title={this.props.location.state.title} />
        <div className='single-post-content'>
          {this.renderContent()}
        </div>
        <Footer />
      </main>
    )
  }
}

SingleBlog.propTypes = {
  location: PropTypes.object.isRequired
}
