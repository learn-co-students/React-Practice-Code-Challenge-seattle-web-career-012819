import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  constructor(){
    super()
    this.state = {
      sushis: [],
      carouselIndex: 0,
      budget: 1000,
      plates: []
    }
    fetch(API).then(resp => resp.json()).then(sushis => sushis.map(sushi => ({...sushi, eaten: false}))).then( sushis =>
      this.setState({
        sushis
      })
    )
  }

  eatSushi = (sushi) => {
    sushi.eaten = true
    this.state.plates.push("")
    this.setState({
      budget: this.state.budget - sushi.price
    })
  }

  moreSushi = () => {
    this.setState({
      carouselIndex: this.state.carouselIndex + 4
    })
  }

  displayFour = () => {
    let newSushi = this.state.sushis.slice(this.state.carouselIndex, this.state.carouselIndex + 4)
    return newSushi
  }

  render() {
    return (
      <div className="app">
        <SushiContainer moreSushi={this.moreSushi} eatSushi={this.eatSushi} sushi={this.displayFour()} />
        <Table plates={this.state.plates} budget={this.state.budget}/>
      </div>
    );
  }
}

export default App;
