import React from "react"

function RoundCounter(props) {
  return (
    <div>
      <h5>Round {Math.ceil(props.turns / 2)}</h5>
    </div>
  )
}

export default RoundCounter