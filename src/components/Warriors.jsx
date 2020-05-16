import React from "react"
import sword from "../images/sword.png"
import shield from "../images/shield.png"

function Warriors(props) {

  return (
    <div>
      <img id={props.player.position} src={props.player.avatar} alt='warrior' />
      <div
        className={props.player.playerId}
        id={props.statesCopy.agresor === "playerOne" ? "active" : ""}>
        <div className='healt playerStats'>
          <img src={sword} alt='swords' />
          <div>{props.player.healt}</div>
        </div>
        <div className='armor playerStats'>
          <img src={shield} alt='shield' />
          <div>{props.player.armor}</div>
        </div>
      </div>
    </div>
  )
}

export default Warriors




