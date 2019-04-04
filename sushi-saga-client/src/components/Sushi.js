// import React, { Fragment } from 'react'
import React, { Component } from 'react'



// const Sushi = (props) => {

class Sushi extends Component {

  constructor(props) {
    super(props);
    this.state = {eaten: false}
  }

 eatSushi = () => {
   if (this.props.balance > this.props.sushiObject.price) {
    this.setState({eaten: true})
    this.props.buySushi(this.props.sushiObject.price, this.props.sushiObject.id)
    console.log('eaten', this.state.eaten)
   }
  }

 render() {
   return (
    <div className="sushi">
      <div className="plate" 
           onClick={this.eatSushi}>
           
        { 
          /* Tell me if this sushi has been eaten! */ 
          this.state.eaten ?
           null
          :
            <img src={this.props.sushiObject.img_url} width="100%" />
        }
      </div>
      <h4 className="sushi-details">
        {this.props.sushiObject.name} - ${this.props.sushiObject.price}
      </h4>
    </div>
  )}
}

export default Sushi;