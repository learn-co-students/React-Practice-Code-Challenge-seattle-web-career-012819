import React, { Component } from "react";
import SushiContainer from "./containers/SushiContainer";
import Table from "./containers/Table";

// Endpoint!
const API = "http://localhost:3000/sushis";

class App extends Component {
  constructor() {
    super();
    this.state = {
      sushies: [],
      index: 0,
      balance: 100,
      eaten: []
    };
    this.getSushies();
    this.getFour = this.getFour.bind(this);
    this.eatSushi = this.eatSushi.bind(this);
  }

  getSushies() {
    fetch(API)
      .then(res => res.json())
      .then(sushies => {
        this.setSushies(sushies);
      });
  }

  setSushies(sushies) {
    let eatSushies = sushies.map(sushi => {
      sushi.isEaten = false;
      return sushi;
    });
    this.setState({ sushies: eatSushies });
  }

  getFour() {
    if (this.state.index >= 96) {
      this.setState({
        index: 0
      });
    } else {
      let newIndex = this.state.index + 4;
      this.setState({
        index: newIndex
      });
    }
  }
  eatSushi(sushi) {
    if (this.state.balance > sushi.price && !sushi.isEaten) {
      sushi.isEaten = true;
      this.state.eaten.push(sushi);
      this.setState({
        eaten: this.state.eaten,
        balance: this.state.balance - sushi.price
      });
    } else {
      return;
    }
  }

  render() {
    return (
      <div className="app">
        <SushiContainer
          sushies={this.state.sushies}
          index={this.state.index}
          getFour={this.getFour}
          eatSushi={this.eatSushi}
        />
        <Table balance={this.state.balance} eaten={this.state.eaten} />
      </div>
    );
  }
}

export default App;
