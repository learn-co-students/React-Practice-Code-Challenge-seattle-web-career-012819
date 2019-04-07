import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  constructor(){
    super()
    this.state={
      allSushi: [],
      money: 100,
      isEaten: [],
      index: 0,
      moreSushi: []
    }
  }

  componentDidMount(){
    fetch(API)
    .then(resp => resp.json())
    .then(json =>{
      json.map(sushi =>{
        sushi.hasEaten =false
        return sushi
      })
      this.setState({
        allSushi: json,
        moreSushi: json.slice(0,4)
      })
    })
  }


  eatSushiClick= (sushi) => {

     if(sushi.price <= this.state.money && sushi.hasEaten === false){
       this.state.money = this.state.money - sushi.price;
       sushi.hasEaten = true;
       this.state.isEaten.push(sushi)
     }
     else{
       alert('Not Available')
     }

     this.setState({
       allSushi: this.state.allSushi,
       //does not seem to need update the states for money and isEaten
       // money: this.state.money,
       // eaten: this.state.isEaten
     })

  }
  changeSushiClick = () =>{

    if(this.state.money > 5){
      this.setState({
        index: this.state.index +=4,
        moreSushi: this.state.allSushi.slice(this.state.index, this.state.index+4)
      })
    }
    else{
      alert("Need more money")
    }

  }

  displayInitialSushi(){
    this.setState({
      moreSushi: this.state.allSushi.slice(this.state.index, this.state.index+4)
    })
    return
  }
  render() {

    return (
      <div className="app">
        <SushiContainer
          allSushi={this.state.moreSushi}
          eatSushiClick={this.eatSushiClick}
          changeSushiClick={this.changeSushiClick}
          />
        <Table money={this.state.money} eaten={this.state.isEaten}/>
      </div>
    );
  }
}

export default App;
