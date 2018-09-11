import React from 'react'
import Header from '../Base/Header';
import Footer from '../Base/Footer';
import LatestPosts from '../Components/LatestPosts';
import Intro from '../Components/Intro';

const Home = () => (
    <div>
      <Header title="👋 I'm Ashley Dance" />
      <div className="container">
        <Intro />
        <LatestPosts />
      </div>
      <Footer />
    </div>
);

export default Home;