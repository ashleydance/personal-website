import React from 'react'
import Header from '../Base/Header';
import LatestPosts from '../Components/LatestPosts';

class Home extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <LatestPosts />
      </div>
    );
  }
};

export default Home;