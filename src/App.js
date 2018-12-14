import React, { Component } from 'react';
import NavBar from './components/NavBar'
import CastList from './components/CastList';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <CastList />
      </div>
    );
  }
}

export default App;
