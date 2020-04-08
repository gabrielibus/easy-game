import React, { useState, useEffect } from "react"
import "./styles/App.css"
import defaultStats from "./models/stats.json"
import sword from "./images/sword.png"
import shield from "./images/shield.png"
import beer from "./images/beer.png"
import iceMan from "./images/iceMan.png"
import monsterFire from "./images/monsterFire.png"

// import actions from "./actions/actions.js"

/* STEPS! 
  1. Create a json with initial stats
  2. Create states: players, agresor, defender, turns
  3. Create Divs structure for playes scores
  4. Create Divs sctructure for actions menu
  5. Creacte actions:
  6. style css
*/

function App() {
  // const temp = Object.entries(defaultStats)
  const [playerOne, setPlayerOne] = useState(defaultStats.playerOne)
  const [playerTwo, setPlayerTwo] = useState(defaultStats.playerTwo)
  const [agresor, setAggressor] = useState("playerOne")
  const [defender, setDefender] = useState("playerTwo")
  const [turns, setTurns] = useState(1)
  const players = { playerOne, playerTwo }


  let defenderId = agresor === "playerOne" ? "imgTwo" : "imgOne"

  useEffect(() => {
    document.getElementById(defenderId).className = ""
    // document.getElementById('indicatorOne').className = "transparent"
    // document.getElementById('indicatorTwo').className = "transparent"
  })

  let actions = {
    entries: (obj) => {
      return Object.entries(obj)
    },
    attackHp: () => {
      let damage = players[agresor].Healt - players[defender].Armor
      let newHp = players[defender].Healt
      let defenderId = agresor === "playerOne" ? "imgTwo" : "imgOne"
      let indicatorId =
        agresor === "playerOne" ? "indicatorTwo" : "indicatorOne"
      damage > 0
        ? actions.updateDefenderStat("Healt", newHp - damage)
        : actions.updateDefenderStat("Healt", newHp - 1)
      document.getElementById(defenderId).className = "animated tada"
      damage > 0
        ? (document.getElementById(indicatorId).innerHTML = damage)
        : (document.getElementById(indicatorId).innerHTML = 1)
      document.getElementById(indicatorId).className = "animated fadeOutUp"
      actions.finishTurn()
    },
    attackDef: () => {
      let newDef = players[defender].Armor
      actions.updateDefenderStat("Armor", newDef - 1)
      actions.finishTurn()
    },
    finishTurn: () => {
      setTurns(turns + 1)
      actions.switchPlayers()
    },
    switchPlayers: () => {
      setAggressor(defender)
      setDefender(agresor)
    },
    updateAgresorStat: (key, value) => {
      agresor === "playerOne"
        ? setPlayerOne({ ...playerOne, [key]: value })
        : setPlayerTwo({ ...playerTwo, [key]: value })
    },
    updateDefenderStat: (key, value) => {
      agresor === "playerOne"
        ? setPlayerTwo({ ...playerTwo, [key]: value })
        : setPlayerOne({ ...playerOne, [key]: value })
    },
    helpItem: (itemArray) => {
      let method = itemArray[0]
      items[method]()
    },
  }

  let items = {
    cure: () => {
      const agresorHp = players[agresor].Healt
      actions.updateAgresorStat("Healt", agresorHp + 2)
      actions.finishTurn()
    },
    fixArmor: () => {
      const agresorDef = players[agresor].Armor
      actions.updateAgresorStat("Armor", agresorDef + 2)
      actions.finishTurn()
    },
  }

  return (
    <div className='App'>
      <h1>Batalla en el Inframundo</h1>
      <h3>
        Player{"  "}
        <span className={agresor === "playerOne" ? "turnOne" : "turnTwo"}>
          {agresor === "playerOne" ? "one" : "two"}
        </span>
        {"  "}
        turn
      </h3>
      <div className='actionsWrapper'>
        <div className='warriors' id='warrior-left'>
          <div
            className='playerOne'
            id={agresor === "playerOne" ? "active" : ""}>
            {actions.entries(playerOne).map((e, idx) => (
              <div className={e[0] === "Healt" ? "healt" : "armor"} key={idx}>
                {e[0]}:{e[1]}
              </div>
            ))}
          </div>
          <img id='imgOne' src={iceMan} alt='warrior' />
          <p id='indicatorOne' className=''>
            
          </p>
        </div>
        <div className='actionsMenu'>
          <div className='iconsWrapper'>
            <div className='icons' onClick={() => actions.attackHp()}>
              <img src={sword} alt='swords' />
              <div> atacar</div>
            </div>
            <div className='icons' onClick={() => actions.attackDef()}>
              <img src={shield} alt='shields' />
              <div> debilitar</div>
            </div>
            <div className='icons' onClick={() => actions.finishTurn()}>
              <img src={beer} alt='beers' />
              <div> pasar</div>
            </div>
          </div>
        </div>
        <div className='warriors' id='warrior-right'>
          <div
            className='playerTwo'
            id={agresor === "playerTwo" ? "active" : ""}>
            {actions.entries(playerTwo).map((e, idx) => (
              <div className={e[0] === "Healt" ? "healt" : "armor"} key={idx}>
                {e[0]}:{e[1]}
              </div>
            ))}
          </div>
          <img id='imgTwo' src={monsterFire} alt='monster' />
          <p id='indicatorTwo' className=''>
            
          </p>
        </div>
      </div>
      <h5>turn {turns / 2}</h5>
    </div>
  )
}

export default App

// let entries = (obj) => {
//   return Object.entries(obj)
// }

// let switchPlayers = () => {
//   setAggressor(defender)
//   setDefender(agresor)
// }

// let updateDefStat = (key, value) => {
//   agresor === "playerOne"
//     ? setPlayerTwo({ ...playerTwo, [key]: value })
//     : setPlayerOne({ ...playerOne, [key]: value })
// }

// let attackHp = () => {
//   let damage = Math.abs(players[agresor].Healt - players[defender].Armor)
//   let newHp = players[defender].Healt - damage
//   damage > 0 ? updateDefStat("Healt", newHp) : updateDefStat("Healt", newHp - 1)
//   finishTurn()
// }

// let attackDef = () => {
//   let newDef = players[defender].Armor - 1
//   updateDefStat("Armor", newDef)
//   finishTurn()
// }

// let items = (idx) => {alert(idx+1)}

// let finishTurn = () => {
//   setTurns(turns + 1)
//   switchPlayers()
// }
