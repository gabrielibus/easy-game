import React, { useState, useEffect } from "react"
import PlayerTurn from "./components/PlayerTurn"
import warrior from "./components/Warriors"
import ActionsMenu from "./components/ActionsMenu"
import RoundCounter from "./components/RoundCounter"
import "./styles/App.css"
import defaultStats from "./models/stats.json"
import Warriors from "./components/Warriors"

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
      } else {
        actions.updateDefenderStat("Healt", defenderHealt - 1)
      }
      actions.finishTurn()
    },
    attackDef: () => {
      actions.updateDefenderStat("Armor", defenderArmor - 1)
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
      actions.updateAgresorStat("Healt", agresorHealt + 2)
      actions.finishTurn()
    },
    fixArmor: () => {
      actions.updateAgresorStat("Armor", agresorArmor + 2)
      actions.finishTurn()
    },
  }

  return (
    <div className='App'>
      <h1>Batalla en el Inframundo</h1>
      <PlayerTurn agresor={agresor} />
      <div className='actionsWrapper'>
        <div className='warriors' id='warrior-left'>
          <Warriors
            avatar={iceMan}
            agresor={agresor}
            player='playerOne'
            id='playerLeft'
            playerOne={playerOne}
            entries={(obj) => actions.entries(obj)}
          />
        </div>
        <ActionsMenu
          attackHp={() => actions.attackHp()}
          attackDef={() => actions.attackDef()}
          finishTurn={() => actions.finishTurn()}
        />
        <div className='warriors' id='warrior-right'>
          <Warriors
            avatar={monsterFire}
            agresor={agresor}
            player='playerTwo'
            id='playerRight'
            playerOne={playerTwo}
            entries={(obj) => actions.entries(obj)}
          />
        </div>
      </div>
      <RoundCounter turns={turns} />
    </div>
  )
}

export default App
