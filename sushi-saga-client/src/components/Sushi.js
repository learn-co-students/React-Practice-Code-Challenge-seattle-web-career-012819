import React, { Fragment, Component } from 'react'

class Sushi extends Component {

  state = {
    eaten: false
  }

  handleClick = () => {
    if (!this.state.eaten){
      this.props.eat(this.props.sushi) ? this.setState({eaten: true}) : null
    }
  }

  render(){
    return (
      <div className="sushi">
        <div className="plate"
          onClick={this.handleClick}>
          {
            this.state.eaten ?
            null
            :
            <img src={this.props.sushi.img_url} width="100%" />
          }
        </div>
        <h4 className="sushi-details">
          {this.props.sushi.name} - ${this.props.sushi.price}
        </h4>
      </div>
    )
  }
}

export default Sushi
