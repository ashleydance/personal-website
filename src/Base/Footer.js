import React from 'react'
import axios from 'axios';
import LastCommit from '../Components/LastCommit';
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
      const lastCommit = response.data[0].commit;
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
          {this.state.loading ? (
            <h2 className="center">Loading...</h2>
          ) : (
            <LastCommit commit={this.state.lastCommit} />
          )}
      </footer>
    )
  }

};

export default Footer;