import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      mostPopular: [],
      yourDish: [],
    }
  }

  componentDidMount = () => {

  }

  render = () => {
    return(
      <div>
        <h1>Testing</h1>
      </div>
    )
  }
}

export default App;
