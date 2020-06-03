import React from "react"

function PlayerTurn({agresor, players}) {
  return (
    <div>
      <h3>
        <span id={agresor}>{players[agresor].avatar }</span>
        turn
      </h3>
    </div>
  )
}

export default PlayerTurn