import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi.js'

const SushiContainer = (props) => {
  const sushis = props.list.map((sushi) => {
    return <Sushi name={sushi.name} src={sushi.img_url} price={sushi.price} key={sushi.id} />
  })
  return (
    <Fragment>
      <div className="belt">
        {sushis}
        <MoreButton />
      </div>
    </Fragment>
  )
}

export default SushiContainer
