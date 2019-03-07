import React from 'react'
import { Header } from '../Base/Header'
import Footer from '../Base/Footer'
import { Intro } from '../Components/Intro'
import { LoadingCat } from '../Components/LoadingCat'
import axios from 'axios'

export default class About extends React.Component {
  state = {
    loading: true,
    title: '',
    text: ''
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

  renderIntro() {
    const { loading, title, text } = this.state
    if ( loading ) return <LoadingCat />
    return (
      <Intro
        title={title}
        text={text}
      />
    )
  }

  render () {
    return (
      <main>
        <Header title='About Me' />
        {this.renderIntro()}
        <Footer />
      </main>
    )
  }
}
