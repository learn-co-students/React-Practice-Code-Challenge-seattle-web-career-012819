import React, { Fragment } from 'react'

const Table = (props) => {

  const renderPlates = (array) => {
    return array.map((x, index) => {
      return <div key={index} className="empty-plate" style={{ top: -7 * index }}/>
    })
  }

  return (
    <Fragment>
      <h1 className="remaining">
        You have: ${props.cash} remaining!
      </h1>
      <div className="table">
        <div className="stack">
          {
            props.eatenSoosh.length>=1 ?
            renderPlates(props.eatenSoosh)
            :
            null
          }
        </div>
      </div>
    </Fragment>
  )
}

export default Table