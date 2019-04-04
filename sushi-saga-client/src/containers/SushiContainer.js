import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi.js'

const SushiContainer = (props) => {
  console.log(props.list);
  return (
    <Fragment>
      <div className="belt">
        <MoreButton />
      </div>
    </Fragment>
  )
}

export default SushiContainer
