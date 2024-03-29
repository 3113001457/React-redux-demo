import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux'

import * as action from './action'

class App extends Component {
  render() {
    return (
      <div className="App">
        <p>{this.props.data.num}</p>
        <button onClick={this.props.add}>++</button>
      </div>
    );
  }
}

export default connect(e=>({data:e}),action)(App);
