import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  constructor(){
    super()
    this.state = {
      items: []
    }
  }

  getSushi = () => {
    fetch(API)
    .then(resp => resp.json())
    .then(response => {
      this.setState({items: response})
    })
  }

  render() {
    return (
      <div className="app">
        <SushiContainer
          allSushi={this.getSushi}
        />
        <Table />
      </div>
    );
  }
}

export default App;
