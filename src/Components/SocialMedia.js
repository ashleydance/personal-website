import React from 'react'
import PropTypes from 'prop-types'
import '../scss/social-media.css'

export const SocialMedia = ({github, twitter, instagram, twitch, linkedin}) => (
  <div className='center social-media-block'>
    <p>Stalk me!</p>
    <ul className='social-media-links'>
      <li><a target='_blank' href={github}><i className='fab fa-github' /></a></li>
      <li><a target='_blank' href={twitter}><i className='fab fa-twitter' /></a></li>
      <li><a target='_blank' href={instagram}><i className='fab fa-instagram' /></a></li>
      <li><a target='_blank' href={twitch}><i className='fab fa-twitch' /></a></li>
      <li><a target='_blank' href={linkedin}><i className='fab fa-linkedin-in' /></a></li>
    </ul>
  </div>
)

SocialMedia.propTypes = {
  github: PropTypes.string.isRequired,
  twitter: PropTypes.string.isRequired,
  instagram: PropTypes.string.isRequired,
  twitch: PropTypes.string.isRequired,
  linkedin: PropTypes.string.isRequired
}
