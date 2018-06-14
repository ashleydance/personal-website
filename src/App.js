import React, { Component } from 'react';
import LatestPosts from './Components/LatestPosts';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Ashley Dance</h1>
        </header>
        <LatestPosts />
      </div>
    );
  }
}

export default App;
