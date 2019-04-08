import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi.js'

const SushiContainer = (props) => {
  function showFour(list){
    return list.slice(props.index, props.index + 4)
  }
  return (
    <Fragment>
      <div className="belt">
        {
          showFour(props.sushis).map(sushi=> {
          return <Sushi key={sushi.id} sushi={sushi} eatSushi={props.eatSushi} />
        })
      }
        <MoreButton moreSushi={props.moreSushi}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer
