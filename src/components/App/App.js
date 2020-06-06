import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './App.css';
import { fetchMostPopularFishData, fetchAllFishData} from '../apiCalls/apiCalls';

class App extends Component {
  constructor() {
    super();
    this.state = {
      allFish: [],
      mostPopular: [],
      yourDish: [],
    }
  }

  getPopularFish = async () => {
    const mostPopularFishData = await fetchMostPopularFishData();
    console.log('mostPopularFishData in App', mostPopularFishData);
  }

  getAllFish = async () => {
    const allFishData = await fetchAllFishData();
    this.updateStateWithData('allFish', allFishData)
  }

  componentDidMount = () => {
    // this.getAllFish();
    this.getPopularFish();
  }

  updateStateWithData = (stateProperty, data) => {
    this.setState({[stateProperty] : [data]})
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
