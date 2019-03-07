import React from 'react'
import axios from 'axios'
import getTwitchStatus from '../Requests/getTwitchStatus'
import { Header } from '../Base/Header'
import Footer from '../Base/Footer'
import { LatestPosts } from '../Components/LatestPosts'
import { Intro } from '../Components/Intro'
import { LoadingCat } from '../Components/LoadingCat'
import Twitch from '../Components/Twitch';

export default class Home extends React.Component {
  state = {
    introTitle: null,
    introText: null,
    introLoading: true,
    isStreaming: false,
  }

  componentDidMount () {
    getTwitchStatus()
      .then( data => {
        if ( data === true ) this.setState({isStreaming: true})
      })

    // Get the ACF data from the WP API
    axios.get(`https://blog.ashleydance.co.uk/wp-json/acf/v3/pages/23`)
      .then(response => {
        this.setState({
          introTitle: response.data.acf.intro_title,
          introText: response.data.acf.intro_text,
          introLoading: false
        })
      })
      .catch(error => {
        console.log(`Something went wrong! ${error}`)
      })

    axios.get('')
      .then(response => {
        console.log(response)
      })
  }

  renderIntro() {
    if (this.state.introLoading) return <LoadingCat />
    return (
      <Intro
        title={this.state.introTitle}
        text={this.state.introText}
      />
    )
  }

  renderTwitch () {
    if (!this.state.isStreaming) return
    return <Twitch />
  }

  render () {
    return (
      <div>
        <Header title="👋 I'm Ashley Dance" />
        <div className='container'>
          {this.renderIntro()}
          {this.renderTwitch()}
          <LatestPosts />
        </div>
        <Footer />
      </div>
    )
  }
}
