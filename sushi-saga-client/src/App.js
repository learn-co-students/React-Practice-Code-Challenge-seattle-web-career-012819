import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      soosh: [],
      eatenSoosh: [],
      cash: 100
    }
    this.updateEatenSooshArray = this.updateEatenSooshArray.bind(this)
  }
  
  componentDidMount() {fetch(API)
    .then(response => response.json())
    .then(json => {
      this.givingEatenProp(json)
      this.setState({soosh: json})})
    }

  givingEatenProp(array){
    for(let sushi of array){
      sushi.isEaten = false
    }
  }

  updateEatenSooshArray(sushi){
    if(sushi.isEaten === false && this.state.cash>=sushi.price){
    let tempo = [...this.state.eatenSoosh]
    let newCash = this.state.cash-sushi.price
    tempo.push(sushi)
    sushi.isEaten = true
    this.setState({eatenSoosh: tempo, cash: newCash})}
    else{
      alert("To err is human")
    }
  }

  render() {
    return (
      <div className="app">
        <SushiContainer  soosh={this.state.soosh} updater={this.updateEatenSooshArray}/>
        <Table eatenSoosh={this.state.eatenSoosh} cash={this.state.cash}/>
      </div>
    );
  }
}

export default App;