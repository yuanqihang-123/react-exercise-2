import React, { Component } from 'react';
import './App.scss';
import App_Header from './header/App_Header';
import App_Body from './body/App_Body.js';

class App extends Component {
  state = {
    num: 0,
  };

  addCart = () => {
    this.setState({
      num: this.state.num + 1,
    });
  };
  render() {
    return (
      <main className="app">
        <App_Header num={this.state.num}></App_Header>
        <App_Body onClick={this.addCart}></App_Body>
      </main>
    );
  }
}

export default App;
