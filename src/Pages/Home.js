import React from 'react'
import axios from 'axios'
import { Header } from '../Base/Header'
import Footer from '../Base/Footer'
import { LatestPosts } from '../Components/LatestPosts'
import { Intro } from '../Components/Intro'
import { LoadingCat } from '../Components/LoadingCat'

export default class Home extends React.Component {
  state = {
    introTitle: null,
    introText: null,
    introLoading: true
  }

  componentDidMount () {
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
  }

  render () {
    return (
      <div>
        <Header title="👋 I'm Ashley Dance" />
        <div className='container'>
          {this.state.introLoading ? (
            <LoadingCat />
          ) : (
            <Intro
              title={this.state.introTitle}
              text={this.state.introText}
            />
          )}
          <LatestPosts />
        </div>
        <Footer />
      </div>
    )
  }
}
