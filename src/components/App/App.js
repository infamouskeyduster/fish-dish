import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './App.css';
import { fetchMostPopularFishData, fetchAllFishData} from '../apiCalls/apiCalls';
import Landing from '../Landing/Landing';
import Header from '../Header/Header';

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
    // console.log('mostPopularFishData', mostPopularFishData);
    // this.setState({mostPopular : mostPopularFishData})
    await this.setState({
      mostPopular : mostPopularFishData
    })
    await console.log('state in app', this.state.mostPopular);
    await console.log('atlantic sea scallop in app', this.state.mostPopular[0]['atlantic-sea-scallop']);
    // this.updateStateWithData('mostPopular', mostPopularFishData);
  }

  findAFish = (stateProperty, name) => {
    console.log('this.state with stateProperty arg', this.state[stateProperty]);
    this.state[stateProperty].find(obj => {
      if (obj.hasOwnProperty(name)) {
        console.log('index of found name prop', this.state[stateProperty].indexOf(obj));
        return this.state[stateProperty].indexOf(obj);
      }
    })
  }

  getAllFish = async () => {
    const allFishData = await fetchAllFishData();
    this.updateStateWithData('allFish', allFishData)
  }

  componentDidMount = async () => {
    // this.getAllFish();
    await this.getPopularFish();
    await this.findAFish('mostPopular', 'atlantic-skipjack-tuna')
  }

  updateStateWithData = (stateProperty, data) => {
    this.setState({[stateProperty] : [data]})
  }

  render = () => {
    return(
      <main className='App'>
          <Switch>
            <Route
              exact path="/"
              render={() => {
                return(
                  <div>
                    <Header />
                  </div>
                )
              }}
              />
          </Switch>
      </main>
    )
  }
}

export default App;
