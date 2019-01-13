import React from 'react'
import { Header } from '../Base/Header'
import Footer from '../Base/Footer'
import { Intro } from '../Components/Intro'
import { LoadingCat } from '../Components/LoadingCat'
import axios from 'axios'

export default class About extends React.Component {
  state = {
    loading: true,
    title: 'Hello World',
    text: 'This is text'
  }

  componentDidMount () {
    // Get the ACF data from the WP API
    axios.get(`https://blog.ashleydance.co.uk/wp-json/acf/v3/pages/36`)
      .then(response => {
        this.setState({
          title: response.data.acf.intro_title,
          text: response.data.acf.intro_text,
          hobbiesText: response.data.acf.hobbies_text,
          loading: false
        })
      })
      .catch(error => {
        console.log(`Something went wrong! ${error}`)
      })
  }

  render () {
    return (
      <div>
        <Header title='About Me' />
        {this.state.loading ? (
          <LoadingCat />
        )
          : <Intro
            title={this.state.title}
            text={this.state.text}
          />
        }
        <Footer />
      </div>
    )
  }
}
