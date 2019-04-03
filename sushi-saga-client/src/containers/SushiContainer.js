import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi.js'

const SushiContainer = (props) => {
  const sushiItem = props.allSushi().map((sushi) => {
    return <Sushi sushi={sushi}/>
  })

  return (
    <Fragment>
      <div className="belt">
        <MoreButton />
      </div>
    </Fragment>
  )
}

export default SushiContainer
