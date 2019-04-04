import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi.js'

const SushiContainer = ({sushiToDisplay, eatMe}) => {

  return (
    <Fragment>
      <div className="belt">
        {sushiToDisplay.map( sushi => (

          <Sushi key={sushi.id} sushi={sushi} eatMe={eatMe} />
        ))}
        <MoreButton />
      </div>
    </Fragment>
  )
}

export default SushiContainer
