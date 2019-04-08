import React, { Component } from 'react';
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi.js'

class SushiContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
    }
    this.alterCurrentFour = this.alterCurrentFour.bind(this)
    this.currentFour = this.currentFour.bind(this)
    this.eatSushi = this.eatSushi.bind(this)
  }

  currentFour(){
    let tempSush;
    tempSush=this.props.soosh.slice(this.state.index, this.state.index + 4)
    return tempSush
  }

  alterCurrentFour(){
    if(this.state.index < 96){
    let tempNum = this.state.index+4
      this.setState({index: tempNum})
    }
      else {
        this.setState({index: 0})
      }
  }
  
  eatSushi(ev, sushi){
    this.props.updater(sushi)
  }

  render(){ 
    return (
      <div className="belt">
        {
          this.currentFour().map(sushi => {
            return <Sushi sush={sushi} key={sushi.id} eatSushi={this.eatSushi}/>
          })
        }
        <MoreButton alterCurrentFour={this.alterCurrentFour}/>
      </div>
    )
  }
}

export default SushiContainer
