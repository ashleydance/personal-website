import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import '../scss/blog-card.css'

export const BlogCard = props => {
  const styles = {
    backgroundImage: `url('${props.image}')`
  }

  return (
    <div className='blog-card'>
      <div className='image' style={styles} />
      <h3>{props.title}</h3>
      <Link className='btn' to={{
        pathname: props.slug,
        state: {
          postID: props.id,
          title: props.title
        }
      }}>
        Read More
      </Link>
    </div>
  )
}

BlogCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired
}
