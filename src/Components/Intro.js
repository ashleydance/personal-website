import React from 'react'
import PropTypes from 'prop-types'
import '../scss/textblock.css'

export const Intro = ({title, text}) => (
  <section className='intro-section'>
    <h2>{title}</h2>
    <p>{text}</p>
  </section>
)

Intro.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
}
