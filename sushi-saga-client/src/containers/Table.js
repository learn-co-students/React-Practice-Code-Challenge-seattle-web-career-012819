import React, { Fragment } from 'react'

const Table = (props) => {

  const renderPlates = (array) => {
    return props.plates.map((x, index) => {
      return <div className="empty-plate" style={{ top: -5 * index }} key={index}/>
    })
  }

  return (
    <Fragment>
      <h1 className="remaining">
        You have: ${props.balance} remaining!
      </h1>
      <div className="table">
        <div className="stack">
          {renderPlates()}
        </div>
      </div>
    </Fragment>
  )
}

export default Table
