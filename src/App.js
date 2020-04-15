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

  let agresorHealt = players[agresor].Healt
  let agresorArmor = players[agresor].Armor
  let defenderHealt = players[defender].Healt
  let defenderArmor = players[defender].Armor
  let damage = agresorHealt - defenderArmor

  let actions = {
    entries: (obj) => {
      return Object.entries(obj)
    },
    attackHp: () => {
      if (damage > 0) {
        actions.updateDefenderStat("Healt", defenderHealt - damage)
      }
      else {
        actions.updateDefenderStat("Healt", defenderHealt - 1)
      } 
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
        <span id={agresor}>
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
          <img id='playerLeft' src={iceMan} alt='warrior' />
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
          <img id='playerRight' src={monsterFire} alt='monster' />
        </div>
      </div>
      <h5>Round {Math.ceil(turns / 2)}</h5>
    </div>
  )
}

export default App
