import React from "react"

function PlayerTurn(props) {
  return (
    <div>
      <h3>
        Player{"  "}
        <span id={props.agresor}>{props.agresor === "playerOne" ? "one" : "two"}</span>
        {"  "}
        turn
      </h3>
    </div>
  )
}

export default PlayerTurn