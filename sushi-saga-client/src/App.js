import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  constructor(){
    super()

    this.state = {
      dollars: 100,
      sushis: [],
      index: 0,
      eaten: []
    }
    this.renderSushis()
  }

  renderSushis = () => {
    fetch(API)
    .then(res => res.json())
    .then(data => {
      data.forEach( sushi => {
        sushi.isEaten = false
      })
      this.setState({sushis: data})
    })
  }

  moreSushis = () => {
    this.setState((prevState) => ({
      index: prevState.index + 4
    }))
  }

  eatSushi = (sushi) => {
    if (sushi.isEaten === false){
      if (sushi.price <= this.state.dollars) {
        console.log("eat sushi")
        this.setState((prevState) => ({
          dollars: prevState.dollars - sushi.price
        }))
        this.setState((prevState) => ({
          eaten: [...prevState.eaten, sushi]
        }))
        sushi.isEaten = true
      }
    }
  }

  render() {
    return (
      <div className="app">
        <SushiContainer index={this.state.index} sushis={this.state.sushis} moreSushis={this.moreSushis} eatSushi={this.eatSushi}/>
        <Table numEaten={this.state.eaten} dollars={this.state.dollars}/>
      </div>
    );
  }
}

export default App;
