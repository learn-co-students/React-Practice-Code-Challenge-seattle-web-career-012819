import React from 'react'

const MoreButton = (props) => {
    return <button onClick={() => props.changeSushiClick()}>
            More sushi!
          </button>
}

export default MoreButton
