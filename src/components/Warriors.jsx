import React from "react"
import sword from "../images/sword.png"
import shield from "../images/shield.png"

function Warriors(props) {
  let playerStats = props.entries(props.playerStats) //['Healt', 10], ["Armor", 8]
  let playerOneHealtStat = playerStats[0][0]
  let playerOneHealtValue = playerStats[0][1]
  let playerTwoHealtStat = playerStats[1][0]
  let playerTwoHealtValue = playerStats[1][1]

  return (
    <div>
      <img id={props.position} src={props.avatar} alt='warrior' />
      <div
        className={props.playerId}
        id={props.agresor === "playerOne" ? "active" : ""}>
        <div className='healt playerStats'>
          <img src={sword} alt='swords' />
          <div>{playerOneHealtValue}</div>
        </div>
        <div className='armor playerStats'>
          <img src={shield} alt='shield' />
          <div>{playerTwoHealtValue}</div>
        </div>
      </div>
    </div>
  )
}

export default Warriors
