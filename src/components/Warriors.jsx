import React from "react"
import sword from "../images/sword.png"
import shield from "../images/shield.png"
import iceMan from "../images/iceMan.png"
import monsterFire from "../images/monsterFire.png"


function Warriors({ player }) {
  const icon = player.avatar === 'iceMan' ? iceMan : monsterFire
  
  return (
    <div>
      <img id={player.position} src={icon} alt='warrior' />
      <div className={player.playerId}>
        <div className='healt playerStats'>
          <img src={sword} alt='swords' />
          <div>{player.healt}</div>
        </div>
        <div className='armor playerStats'>
          <img src={shield} alt='shield' />
          <div>{player.armor}</div>
        </div>
      </div>
    </div>
  )
}

export default Warriors
