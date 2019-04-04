import React, { Fragment } from 'react'

const Sushi = ({sushi, eatMe}) => {
  return (
    <div className="sushi">
      <div className="plate"
           onClick={() => eatMe(sushi.id, sushi.price)}>
        {
          sushi.eaten ?
            null
          :
            <img src={sushi.img_url} width="100%" />
        }
      </div>
      <h4 className="sushi-details">
        {sushi.name} - ${sushi.price}
      </h4>
    </div>
  )
}

export default Sushi
