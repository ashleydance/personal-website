import React from 'react'
import PropTypes from 'prop-types'
import '../scss/single-post-content.css'

export const SinglePostContent = ({content}) => (
  <div className='container' dangerouslySetInnerHTML={{ __html: content }} />
)

SinglePostContent.propTypes = {
  content: PropTypes.node.isRequired
}
