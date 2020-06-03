import React from "react"
import avatars from "../models/avatars"

function Warriors({ player }) {
  const icon = avatars[player.avatar]

  return (
    <div>
      <img id={player.position} src={icon} alt='warrior' />
      <div className={player.playerId}>
        <div className='healt playerStats'>
          <img src={avatars.sword} alt='swords' />
          <div>{player.healt}</div>
        </div>
        <div className='armor playerStats'>
          <img src={avatars.shield} alt='shield' />
          <div>{player.armor}</div>
        </div>
      </div>
    </div>
  )
}

export default Warriors
