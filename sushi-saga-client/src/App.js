import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  constructor(props) {
    super(props);
    this.state={
      allSushi: [],
      start: 0,
      money: 1000,
      platesEaten: 0
    }
  }

  componentDidMount() {
    fetch(API)
    .then(res => res.json())
    .then(sushis => {
      const allSushi = sushis.map(sushi => (
        {...sushi, eaten: false}
      ));
      this.setState({allSushi})
    })
  }

  sushiToDisplay() {
    return this.state.allSushi.slice(this.state.start, this.state.start + 4)
  }

  eatMe = (id, price) => {
    let newSushi
    if (this.state.money >= price) {
       newSushi = this.state.allSushi.map(sushi => {
         if (sushi.id === id){
      return {...sushi, eaten: true}
    } else {
      return sushi
    }
      })
      console.log(newSushi)
      this.setState({
        allSushi: newSushi,
        money: this.state.money - price,
        platesEaten: this.state.platesEaten + 1
      })
    }
  }

  incrementStart = () => {
    this.setState({
      start: this.state.start + 4
    })
  }

  render() {
    return (
      <div className="app">
        <SushiContainer  sushiToDisplay={this.sushiToDisplay()} eatMe={this.eatMe} incrementStart={this.incrementStart}/>
        <Table money={this.state.money} platesEaten={this.state.platesEaten}/>
      </div>
    );
  }
}

export default App;
