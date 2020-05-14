import React from "react"

function PlayerTurn(props) {
  return (
    <div>
      <h3>
        <span id={props.agresor}>{props.agresor === "playerOne" ? "iceMan" : "fireMonster"}</span>
        {"  "}
        turn
      </h3>
    </div>
  )
}

export default PlayerTurn