import React, { useState, useEffect } from "react"
import PlayerTurn from "./components/PlayerTurn"
import ActionsMenu from "./components/ActionsMenu"
import RoundCounter from "./components/RoundCounter"

import "./styles/App.css"
import "./styles/ActionsMenu.css"
import "./styles/Warriors.css"
import "./styles/PlayerTurn.css"

import defaultStats from "./models/stats.json"
import Warriors from "./components/Warriors"

import iceMan from "./images/iceMan.png"
import monsterFire from "./images/monsterFire.png"

function App() {
  const [playerOne, setPlayerOne] = useState(defaultStats.playerOne)
  const [playerTwo, setPlayerTwo] = useState(defaultStats.playerTwo)
  const [agresor, setAggressor] = useState("playerOne")
  const [defender, setDefender] = useState("playerTwo")
  const [turns, setTurns] = useState(1)
  const [history, setHistory] = useState({ 0: defaultStats })
  const players = { playerOne, playerTwo }

  let agresorHealt = players[agresor].Healt
  let agresorArmor = players[agresor].Armor
  let defenderHealt = players[defender].Healt
  let defenderArmor = players[defender].Armor
  let damage =
    agresorHealt - defenderArmor > 1 ? agresorHealt - defenderArmor : 1

  let actions = {
    entries: (obj) => {
      return Object.entries(obj)
    },
    attackHp: () => {
      const defenderLife = defenderHealt - damage
      if (damage > 0) {
        defenderLife >= 0
          ? actions.updateDefenderStat("Healt", defenderHealt - damage)
          : actions.updateDefenderStat("Healt", 0)
      } else {
        actions.updateDefenderStat("Healt", defenderHealt - 1)
      }
    },
    attackDef: () => {
      defenderArmor - 1 >= 0
        ? actions.updateDefenderStat("Armor", defenderArmor - 1)
        : actions.updateDefenderStat("Armor", 0)
    },
    finishTurn: () => {
      if (agresorHealt <= 0) {
        actions.updateDefenderStat("Healt", 0)
        alert(defender + " WINS" + "  El juego se reiniciará")
        window.location.reload(true)
      } else {
        setTurns(turns + 1)
        actions.switchPlayers()
      }
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
    spendItem: (itemArray) => {
      let method = itemArray[0]
      items[method]()
    },
    updateHistory: () => {
      setHistory({ ...history, [turns]: { playerOne, playerTwo } })
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
            playerId='playerOne'
            position='playerLeft'
            playerStats={playerOne}
            entries={(obj) => actions.entries(obj)}
          />
        </div>
        <div className='vsDiv'>vs</div>
        <div className='warriors' id='warrior-right'>
          <Warriors
            avatar={monsterFire}
            agresor={agresor}
            playerId='playerTwo'
            position='playerRight'
            playerStats={playerTwo}
            entries={(obj) => actions.entries(obj)}
          />
        </div>
      </div>
      <ActionsMenu
        attackHp={() => {
          actions.attackHp()
          actions.updateHistory()
          actions.finishTurn()
        }}
        attackDef={() => {
          actions.attackDef()
          actions.updateHistory()
          actions.finishTurn()
        }}
        finishTurn={() => {
          actions.updateHistory(9)
          actions.finishTurn()
        }}
        updateAgresorStat={() =>
          actions.updateAgresorStat("Healt", agresorHealt + 1)
        }
        defenderHealt={defenderHealt}
        defenderArmor={defenderArmor}
        damage={damage}
        agresor={agresor}
      />
      <RoundCounter turns={turns} />
      {/* <div>
        <div>Player One Last Turn: {history[turns - 1].playerOne.Healt}</div>
        <div>Player One Last Turn: {history[turns - 1].playerOne.Armor}</div>
      </div>
      <div>
        <div>Player Two Last Turn: {history[turns - 1].playerTwo.Healt}</div>
        <div>Player Two Last Turn: {history[turns - 1].playerTwo.Armor}</div>
      </div> */}
    </div>
  )
}

export default App
