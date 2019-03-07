import React from 'react'
import PropTypes from 'prop-types'
import '../scss/last-commit.css'

export const LastCommit = ({commit}) => (
  <div className='center last-commit'>
    <p>Last Github Commit</p>
    <a href={commit.html_url} target='_blank'>
      {commit.commit.message}
    </a>
  </div>
)

LastCommit.propTypes = {
  commit: PropTypes.object.isRequired
}
