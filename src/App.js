import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PostList from './components/PostList';

class App extends Component {

  render() {
    return (
      <div className="App">
        <PostList />
      </div>
    )
  }
}

export default App;
