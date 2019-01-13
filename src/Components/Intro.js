import React from 'react'
import PropTypes from 'prop-types'
import '../scss/textblock.css'

export const Intro = props => (
  <section className='intro-section'>
    <h2>{props.title}</h2>
    <p>{props.text}</p>
  </section>
)

Intro.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
}
