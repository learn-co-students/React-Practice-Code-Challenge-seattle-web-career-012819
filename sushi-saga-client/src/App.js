import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  constructor(props){
    super(props)
    this.state={
      allSushi: [],
      start: 0,
      money: 100
    }
  }

componentDidMount(){
    fetch(API)
    .then(resp => resp.json())
    .then(sushis =>  {
      const allSushi = sushis.map(sushi => (
        {...sushi, eaten: false}
      ));
      this.setState({ allSushi })
    })
}

sushiToDisplay() {
  return this.state.allSushi.slice(this.state.start, this.state.start + 4)
}

eatMe = (id, price) => {
  if(this.state.money >= price){
  const updatedSushi = this.state.allSushi.map(sushi => {
    if (sushi.id === id){
      return {...sushi, eaten: true}
    } else {
      return sushi
    }
  })
  this.setState({
    allSushi: updatedSushi,
    money: this.state.money - price
  })
  }
}


  render() {
    return (
      <div className="app">
        <SushiContainer sushiToDisplay ={this.sushiToDisplay()} eatMe={this.eatMe}/>
        <Table />
      </div>
    );
  }
}

export default App;
