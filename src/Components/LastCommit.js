import React from 'react'
import PropTypes from 'prop-types'
import '../scss/last-commit.css'

export const LastCommit = props => (
  <div className='center last-commit'>
    <p>Last Commit</p>
    <a href={props.commit.html_url} target='_blank'>
      {props.commit.commit.message}
    </a>
  </div>
)

LastCommit.propTypes = {
  commit: PropTypes.object.isRequired
}
