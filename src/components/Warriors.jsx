import React from "react"


function Warriors(props) {
  return (
    <div>
      <div className={props.playerId} id={props.agresor === "playerOne" ? "active" : ""}>
        {props.entries(props.playerStats).map((e, idx) => (
          <div className={e[0] === "Healt" ? "healt" : "armor"} key={idx}>
            {e[0]}:{e[1]}
          </div>
        ))}
      </div>
      <img id={props.position} src={props.avatar} alt='warrior' />
    </div>
  )
}

export default Warriors
