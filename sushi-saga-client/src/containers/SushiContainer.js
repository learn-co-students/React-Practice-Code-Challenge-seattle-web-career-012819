import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

let eaten = false

const SushiContainer = (props) => {



  const createSushiContainers = () => {
    return props.sushiArray.map((sushi) => {
      return <Sushi 
        key={sushi.id} 
        buySushi={props.buySushi} 
        sushiObject={sushi}
        balance={props.balance}
      />
    })
  }

  return (
    <Fragment>
      <div className="belt">
        {
          createSushiContainers()
        }
        <MoreButton onMoreSushiClick={props.onMoreSushi}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer