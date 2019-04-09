import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
    sushis: [],
    eatenSushis: [],
    index: 0,
    balance: 150
  }

  componentDidMount(){
    fetch(API)
    .then(result => {
      return result.json()
    })
    .then(sushis => {
      this.setState({sushis})
    });
  }

  moreSushis = () => {
    this.state.eatenSushis.forEach(sushi => this.removeSushi(sushi)) //so they won't reappear later on
    this.setState(prevState => (
      {index: prevState.index + 4}
    ));
  }

  removeSushi = (sushi) => {
    this.setState(prevState => ({
      sushis: [...prevState.sushis].filter(s => s!= sushi),
    }))
  }

  eatSushi = (sushi) => {
    if (this.state.balance >= sushi.price){
      this.setState(prevState => ({
        eatenSushis: [...prevState.eatenSushis].concat(sushi),
        balance: prevState.balance - sushi.price,
      }));
      return true
    }
    return false
  }

  get fourSushis(){
    let four = []
    for(let x=0; x<4;x++){
      let sushi = this.state.sushis[(this.state.index+x)%this.state.sushis.length]
      sushi? four.push(sushi) : null
    }
    console.log(four)
    return four;
  }

  render() {
    // console.log(this.state.index, this.state.sushis.length)
    return (
      <div className="app">
        <SushiContainer
         sushis={this.fourSushis}
         moreSushis={this.moreSushis}
         eatSushi={this.eatSushi}/>
       <Table plates={this.state.eatenSushis} balance={this.state.balance}/>
      </div>
    );
  }
}

export default App;
