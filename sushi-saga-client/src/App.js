import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

// const sushiArray = Promise.resolve(grabSushi().then((json)=> {
//   return json;
// }))

// function grabSushi() {
//   return fetch(API)
//   .then(results => {
//     return results.json()
//   })
//   .then(json => {
//     return json;
//   })
// }


class App extends Component {
  constructor() {
    super()
    this.state = {
      currentSushi: [],
      currentSushiIndex: 0,
      balance: 50,
      numberEaten: []
    }
  }

  buySushi = (sushiCost, sushiId) => {
    this.setState({
      balance: this.state.balance - sushiCost
    })
    this.calculatePlates(sushiId)
  }

  calculatePlates = (sushiId) => {
    let newArr = this.state.numberEaten
    newArr.push(sushiId)
    this.setState({
      numberEaten: newArr
    })
  }

  componentDidMount = () => {
    this.handleMoreSushiClick()
  }

  handleMoreSushiClick = () => {
    fetch(API)
    .then(results => {
      return results.json()
    })
    .then(json => {
      this.defineSushi(json)
    })
  }

  defineSushi = (allSushi) => {
    this.setState({
      currentSushi: allSushi.slice(this.state.currentSushiIndex, this.state.currentSushiIndex + 4),
      currentSushiIndex: this.state.currentSushiIndex + 4
    })
    console.log('state', this.state)
  }



  render() {
    return (
      <div className="app">
        <SushiContainer  
          onMoreSushi={this.handleMoreSushiClick}
          sushiArray={this.state.currentSushi}
          buySushi={this.buySushi}
          balance={this.state.balance}
        />
        <Table balance={this.state.balance} numberEaten={this.state.numberEaten} key={this.state.numberEaten[this.state.numberEaten.length - 1]}/>
      </div>
    );
  }
}

export default App;