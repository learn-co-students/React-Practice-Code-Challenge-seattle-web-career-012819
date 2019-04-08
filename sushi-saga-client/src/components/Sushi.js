import React from 'react'


const Sushi = (props) => {

  return (
    <div className="sushi">
      <div className="plate" 
           onClick={(ev) => {props.eatSushi(ev, props.sush)}}>
        { 
          props.sush.isEaten ?
          null
          :
          <img src={props.sush.img_url} width="100%" alt="yo"/>
        }
      </div>
      <h4 className="sushi-details">
        {props.sush.name} - ${props.sush.price}
      </h4>
    </div>
  )
}

export default Sushi