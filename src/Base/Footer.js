import React, { Component } from 'react'
import axios from 'axios'
import { LastCommit } from '../Components/LastCommit'
import { SocialMedia } from '../Components/SocialMedia'
import '../scss/footer.css'

export default class Footer extends Component {
  state = {
    lastCommit: '',
    loading: true
  }

  componentDidMount () {
    axios.get('https://api.github.com/repos/ashleydance/personal-website/commits')
      .then(response => {
        const lastCommit = response.data[0]
        this.setState({
          lastCommit,
          loading: false
        })
      })
      .catch(error => {
        console.log(`Something went wrong! ${error}`)
      })
  }

  renderLastCommit() {
    const { loading, lastCommit } = this.state
    if (loading) return
    return <LastCommit commit={lastCommit} />
  }

  render () {
    return (
      <footer className='site-footer'>
        <SocialMedia
          github='https://github.com/ashleydance'
          twitter='https://twitter.com/ashleydance_'
          linkedin='https://www.linkedin.com/in/ashley-dance/'
          twitch='https://www.twitch.tv/ashleydance'
          instagram='https://www.instagram.com/_ashleydance/'
        />
        {this.renderLastCommit()}
      </footer>
    )
  }
}
