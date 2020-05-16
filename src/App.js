import React, { useState } from "react"
import PlayerTurn from "./components/PlayerTurn"
import ActionsMenu from "./components/ActionsMenu"
import RoundCounter from "./components/RoundCounter"
// import actions from './actions/actions'

// yo puedo operar todo desde copias y solo setear todo al final, maybe

import "./styles/App.css"
import "./styles/ActionsMenu.css"
import "./styles/Warriors.css"
import "./styles/PlayerTurn.css"

import defaultStats from "./models/stats.json"
import Warriors from "./components/Warriors"

import iceMan from "./images/iceMan.png"
import monsterFire from "./images/monsterFire.png"

import attack from "./actions/attacks"

function App() {
  const [playerOne, setPlayerOne] = useState(defaultStats.playerOne)
  const [playerTwo, setPlayerTwo] = useState(defaultStats.playerTwo)
  const [agresor, setAggressor] = useState("playerOne")
  const [defender, setDefender] = useState("playerTwo")
  const [turns, setTurns] = useState(1)
  const [history, setHistory] = useState({ 0: defaultStats })

  let players = { playerOne, playerTwo }

  let hit =
    players[agresor].Healt - players[defender].Armor > 1
      ? players[agresor].Healt - players[defender].Armor
      : 1

  let statesCopy = {
    agresorHealt: players[agresor].Healt,
    agresorArmor: players[agresor].Armor,
    defenderHealt: players[defender].Healt,
    defenderArmor: players[defender].Armor,
    damage: hit,
    // playerOne: players[agresor].Healt,
    // playerTwo: players[agresor].Healt,
    // turns: turns,
    // playerOne: playerOne,
    // playerTwo: playerTwo,
  }

  let actions = {
    finishTurn: () => {
      if (statesCopy.agresorHealt <= 0) {
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
      // verificando si la función flecha con su efecto de carga en memoria ayuda a evitar callbacks
      let ensayis = () => {
        setPlayerOne({ ...playerOne, [key]: value })
      }
      agresor === "playerOne"
        ? ensayis()
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
      actions.updateAgresorStat("Healt", statesCopy.agresorHealt + 2)
      actions.finishTurn()
    },
    fixArmor: () => {
      actions.updateAgresorStat("Armor", statesCopy.agresorArmor + 2)
      actions.finishTurn()
    },
  }

  let actionsMenuActions = {
    attackHp: () => {
      const newDefenderHealt = attack.defender.healt(statesCopy)
      // statesCopy = {...statesCopy, defenderHealt}
      actions.updateDefenderStat("Healt", newDefenderHealt)
      actions.updateHistory()
      actions.finishTurn()
      // updateDefenderStat: (key, value) => {
      //   agresor === "playerOne"
      //     ? setPlayerTwo({ ...playerTwo, [key]: value })
      //     : setPlayerOne({ ...playerOne, [key]: value })
      // },
    },
    attackDef: () => {
      const newDefenderArmor = attack.defender.armor(statesCopy)
      actions.updateDefenderStat("Armor", newDefenderArmor)
      actions.updateHistory()
      actions.finishTurn()
    },
    finishTurn: () => {
      actions.updateHistory()
      actions.finishTurn()
    },
    updateAgresorStat: () =>
      actions.updateAgresorStat("Healt", statesCopy.agresorHealt + 1),
  }

  let playerOneConfig = {
    avatar: iceMan,
    playerId: "playerOne",
    position: "playerLeft",
    healt: playerOne.Healt,
    armor: playerOne.Armor,
  }
  let playerTwoConfig = {
    avatar: monsterFire,
    playerId: "playerTwo",
    position: "playerRight",
    healt: playerTwo.Healt,
    armor: playerTwo.Armor,
  }

  return (
    <div className='App'>
      <h1>Batalla en el Inframundo</h1>
      <PlayerTurn agresor={statesCopy.agresor} />
      <div className='actionsWrapper'>
        <div className='warriors' id='warrior-left'>
          <Warriors player={playerOneConfig} statesCopy={statesCopy} />
        </div>
        <div className='vsDiv'>vs</div>
        <div className='warriors' id='warrior-right'>
          <Warriors player={playerTwoConfig} statesCopy={statesCopy} />
        </div>
      </div>
      <ActionsMenu
        statesCopy={statesCopy}
        actionsMenuActions={actionsMenuActions}
      />
      <RoundCounter turns={turns} />
    </div>
  )
}

export default App
