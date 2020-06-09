import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './App.css';
import { fetchMostPopularFishData } from '../apiCalls/apiCalls';
import Landing from '../Landing/Landing';
import Header from '../Header/Header';
import FishCardsContainer from '../FishCardsContainer/FishCardsContainer';
import FishDetailsContainer from '../FishDetailsContainer/FishDetailsContainer';
import MenuButtons from '../MenuButtons/MenuButtons';
import Search from '../Search/Search';

class App extends Component {
  constructor() {
    super();
    this.state = {
      mostPopular: [],
      savedFish: [],
      searchInput: '',
    }
  }

  componentDidMount = async () => {
    await this.getPopularFish();
  }

  getPopularFish = async () => {
    const mostPopularFishData = await fetchMostPopularFishData();
    await this.setState({
      mostPopular : mostPopularFishData
    })
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

  addOrRemoveFishFromSavedFish = (fishName) => {
    if(this.state.savedFish.includes(fishName)) {
      let newSavedFishArr = this.state.savedFish.filter(fish => fish !== fishName);
      this.setState({savedFish : newSavedFishArr});
    } else {
      this.setState({savedFish:[ ...this.state.savedFish, fishName ]});
    }
  }

  extractSavedFishFromDataSet = () => {
    let savedFishDataSet = this.state.savedFish.map(currentFishName => {
      return this.findAFish('mostPopular', currentFishName);
    })
    return savedFishDataSet;
  }

  updateStateWithData = (stateProperty, data) => {
    this.setState({[stateProperty] : [data]})
  }

  updateStateWithSearchInput = (event) => {
    event.preventDefault();
    let value = event.target.value
    this.setState({searchInput: value})
  }

  filterMostPopularForSearchTerm = () => {
    let filteredData = this.state.mostPopular.filter(currentFishObj => {
      let fishName = Object.keys(currentFishObj)[0];
      let lowercaseFishName = fishName.toLowerCase()
      let lowercaseSearchTerm = this.state.searchInput.toLowerCase();

      if(lowercaseFishName.includes(lowercaseSearchTerm)) {
        return currentFishObj;
      }
    })
    console.log('filtered data in filterMostPopularForSearchTerm', filteredData);
    return filteredData;
  }

  render = () => {
    return(
      <main className='App'>
          <Switch>

            <Route
              exact path="/search-fish/:searchInput"
              render={({ match }) => {

                const filteredSearchResult = this.filterMostPopularForSearchTerm();

                return(
                  <div>
                    <Header />
                    <MenuButtons />
                    <FishCardsContainer
                      data={filteredSearchResult}
                      savedFish={this.state.savedFish}
                      addOrRemoveFishFromSavedFish={this.addOrRemoveFishFromSavedFish}
                      />
                  </div>
                )
              }}/>

            <Route
              exact path="/details/:speciesName"
              render={({ match }) => {
                const speciesNameFromMatch = match.params.speciesName;
                const foundFishInDataSet = this.findAFish('mostPopular', speciesNameFromMatch)
                console.log('foundFishInDataSet', foundFishInDataSet);
                return(
                  <div>
                    <Header />
                    <MenuButtons />
                    <FishDetailsContainer
                      name={speciesNameFromMatch}
                      fish={foundFishInDataSet}
                    />
                  </div>
                )
              }}/>

            <Route
              exact path="/search-fish"
              render={() => {
                return(
                  <div>
                    <Header />
                      <MenuButtons />
                    <Search
                      updateStateWithSearchInput={this.updateStateWithSearchInput}
                      searchInput={this.state.searchInput}
                    />
                  </div>
                )
              }}/>

            <Route
              exact path="/saved-fish"
              render={() => {
                return(
                  <div>
                    <Header />
                      <MenuButtons />
                    <FishCardsContainer
                      data={this.extractSavedFishFromDataSet()}
                      savedFish={this.state.savedFish}
                      addOrRemoveFishFromSavedFish={this.addOrRemoveFishFromSavedFish}
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
                      <MenuButtons />
                    <FishCardsContainer
                      data={this.state.mostPopular}
                      savedFish={this.state.savedFish}
                      addOrRemoveFishFromSavedFish={this.addOrRemoveFishFromSavedFish}
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
