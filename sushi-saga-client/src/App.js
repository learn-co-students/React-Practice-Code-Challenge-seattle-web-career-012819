import React, { Component } from "react";
import SushiContainer from "./containers/SushiContainer";
import Table from "./containers/Table";

// Endpoint!
const API = "http://localhost:3000/sushis";

class App extends Component {
  constructor() {
    super();
    this.state = {
      sushi: [],
      displaySushi: [],
      eaten: [],
      index: 4,
      budget: 100
    };
    this.getSushi();
  }

  getSushi = () => {
    fetch(API)
      .then(resp => resp.json())
      .then(sushi =>
        this.setState({
          sushi: sushi,
          displaySushi: sushi.slice(0, 4)
        })
      );
  };

  moreSushi = () => {
    console.log("more sushi please");
    let newDisplay = this.state.sushi.slice(
      this.state.index,
      this.state.index + 4
    );
    this.setState({
      displaySushi: newDisplay,
      index: this.state.index + 4
    });
  };

  eatSushi = sushi => {
    console.log("eating sushi (yum?)");
    if (sushi.isEaten === true) {
      return;
    }
    if (sushi.price > this.state.budget) {
      alert("You don't have enough money!");
      return;
    } else {
      let budget = this.state.budget - sushi.price;
      this.setState({
        budget: budget
      });
    }

    //alter sushi state
    sushi.isEaten = true;
    let eaten = this.state.eaten;
    eaten.push(sushi);
    this.setState({
      eaten: eaten
    });
  };

  render() {
    return (
      <div className="app">
        <SushiContainer
          displaySushi={this.state.displaySushi}
          moreSushi={this.moreSushi}
          eatSushi={this.eatSushi}
        />
        <Table eaten={this.state.eaten} budget={this.state.budget} />
      </div>
    );
  }
}

export default App;
