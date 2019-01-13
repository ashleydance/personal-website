import React from 'react'
import PropTypes from 'prop-types'
import '../scss/single-post-content.css'

export const SinglePostContent = props => (
  <div className='container' dangerouslySetInnerHTML={{ __html: props.content }} />
)

SinglePostContent.propTypes = {
  content: PropTypes.node.isRequired
}
