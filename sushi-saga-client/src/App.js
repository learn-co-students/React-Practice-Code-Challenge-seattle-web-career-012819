import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  state = {
    sushis: [],
    index: 0,
    balance: 100,
    eaten: []
  }

  constructor(){
    super()

    this.getSushis()
    .then(sushis => {
      sushis = sushis.map(sushi => {
        sushi.isEaten = false
        return sushi
      })
      this.setState({sushis})
    })
    this.moreSushi = this.moreSushi.bind(this)
    this.eatSushi = this.eatSushi.bind(this)
  }

  getSushis() {
    return fetch(API).then(response => response.json())
  }

  moreSushi() {
    this.setState({index: this.state.index + 4})
  }

  eatSushi(sushi) {
    if (sushi.price > this.state.balance || sushi.isEaten) {
      return
    }
    this.state.eaten.push(sushi)
    console.log('eat')
    sushi.isEaten = true
    this.setState({
      sushis: this.state.sushis,
      balance: this.state.balance - sushi.price,
      eaten: this.state.eaten
    })
  }


  render() {
    return (
      <div className="app">
        <SushiContainer
            index={this.state.index}
           sushis={this.state.sushis}
           moreSushi={this.moreSushi}
           eatSushi={this.eatSushi}
           />
         <Table balance={this.state.balance} eaten={this.state.eaten}/>
      </div>
    );
  }
}

export default App;
