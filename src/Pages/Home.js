import React from 'react'
import Header from '../Base/Header';
import LatestPosts from '../Components/LatestPosts';
import Intro from '../Components/Intro';

class Home extends React.Component {
  render() {
    return (
      <div>
        <Header title="👋 I'm Ashley Dance" />
        <div className="container">
          <Intro />
          <LatestPosts />
        </div>
      </div>
    );
  }
};

export default Home;