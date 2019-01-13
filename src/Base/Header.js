import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import '../scss/header.css'

export const Header = props => (
  <header className='site-header'>
    <div className='container'>
      <ul className='menu'>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/blog'>Blog</Link></li>
        <li><Link to='/contact'>Contact</Link></li>
      </ul>
    </div>
    <h1>{props.title}</h1>
  </header>
)

Header.propTypes = {
  title: PropTypes.string.isRequired
}
