import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {

  function displaySushi() {
    return fourSushis().map(sushi => {
      return <Sushi key={sushi.id} sushi={sushi} eatSushi={props.eatSushi}/>
    })
  }

  function fourSushis(){
    return props.sushis.slice(props.index, props.index + 4)
  }

  return (
    <Fragment>
      <div className="belt">
        {displaySushi()}
        <MoreButton moreSushis={props.moreSushis}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer
