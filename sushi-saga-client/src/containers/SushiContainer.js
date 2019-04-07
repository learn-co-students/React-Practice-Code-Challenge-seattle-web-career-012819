import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {
  return (
    <Fragment>
      <div className="belt">
        {
          props.allSushi.map(sushi =>{
            return <Sushi sushi={sushi} key={sushi.id} eatSushiClick={props.eatSushiClick}
              />
          })
        }
        <MoreButton changeSushiClick={props.changeSushiClick}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer
