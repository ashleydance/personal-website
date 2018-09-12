import React from 'react'
import axios from 'axios';
import LastCommit from '../Components/LastCommit';
import SocialMedia from '../Components/SocialMedia';
import LoadingCat from '../Components/LoadingCat';
import '../scss/footer.css';

class Footer extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      lastCommit: 'here',
      loading: true
    }
  }

  componentDidMount() {
    axios.get('https://api.github.com/repos/ashleydance/personal-website/commits')
    .then( response => {
      const lastCommit = response.data[0];
      this.setState({
        lastCommit,
        loading: false
      });
    })
    .catch( error => {
      console.log(`Something went wrong! ${error}`);
    });
  }

  render() {
    return(
      <footer className="site-footer">
          <SocialMedia
            github="https://github.com/ashleydance"
            twitter="https://twitter.com/ashleydance_"
            linkedin="https://www.linkedin.com/in/ashley-dance/"
            instagram="https://www.instagram.com/_ashleydance/"
          />
          {this.state.loading ? (
            <LoadingCat />
          ) : (
            <LastCommit commit={this.state.lastCommit} />
          )}
      </footer>
    )
  }

};

export default Footer;