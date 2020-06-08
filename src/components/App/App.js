import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './App.css';
import { fetchMostPopularFishData, fetchAllFishData} from '../apiCalls/apiCalls';
import Landing from '../Landing/Landing';
import Header from '../Header/Header';
import FishCardsContainer from '../FishCardsContainer/FishCardsContainer';
import FishDetailsContainer from '../FishDetailsContainer/FishDetailsContainer';

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
    // await console.log('state in app', this.state.mostPopular);
    // await console.log('atlantic sea scallop in app', this.state.mostPopular[0]['atlantic-sea-scallop']);
    // this.updateStateWithData('mostPopular', mostPopularFishData);
  }

  findAFish = (stateProperty, name) => {
    return this.state[stateProperty].find(obj => {
      if (obj.hasOwnProperty(name)) {
        const index = this.state[stateProperty].indexOf(obj);
        const fishObj = this.state.mostPopular[index];

        return fishObj;
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
    // await this.findAFish('mostPopular', 'atlantic-skipjack-tuna')
  }

  updateStateWithData = (stateProperty, data) => {
    this.setState({[stateProperty] : [data]})
  }

  render = () => {
    return(
      <main className='App'>
          <Switch>

            <Route
              exact path="/details/:speciesName"
              render={({ match }) => {
                const speciesNameFromMatch = match.params.speciesName;
                const foundFishInDataSet = this.findAFish('mostPopular', speciesNameFromMatch)
                console.log('foundFishInDataSet', foundFishInDataSet);
                return(
                  <div>
                    <Header />
                    <FishDetailsContainer
                      name={speciesNameFromMatch}
                      fish={foundFishInDataSet}
                    />
                  </div>
                )
              }}/>

            <Route
              exact path="/most-popular"
              render={() => {
                return(
                  <div>
                    <Header />
                    <FishCardsContainer
                      mostPopular={this.state.mostPopular}
                    />
                  </div>
                )
              }}/>

            <Route
              exact path="/"
              render={() => {
                return(
                  <div>
                    <Header />
                    <Landing />
                  </div>
                )
              }}/>

          </Switch>
      </main>
    )
  }
}

export default App;
