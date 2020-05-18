import React, { useState } from "react"
import PlayerTurn from "./components/PlayerTurn"
import ActionsMenu from "./components/ActionsMenu"
import RoundCounter from "./components/RoundCounter"
import "./styles/App.css"
import "./styles/ActionsMenu.css"
import "./styles/Warriors.css"
import "./styles/PlayerTurn.css"
import defaultStats from "./models/stats.json"
import Warriors from "./components/Warriors"
import attack from "./actions/attacks"

function App() {
  const [agresor, setAggressor] = useState("playerOne")
  const [defender, setDefender] = useState("playerTwo")
  const [turns, setTurns] = useState(1)
  const [history, setHistory] = useState({ 0: defaultStats })
  const [gamePlayers, setGamePlayers] = useState({
    playerOne: defaultStats.playerOne,
    playerTwo: defaultStats.playerTwo,
  })

  let gamePlayersCopy = gamePlayers
  let playerStatus = {
    agresorHealt: gamePlayersCopy[agresor].healt,
    agresorArmor: gamePlayersCopy[agresor].armor,
    defenderHealt: gamePlayersCopy[defender].healt,
    defenderArmor: gamePlayersCopy[defender].armor,
    damage:
      gamePlayersCopy[agresor].healt - gamePlayersCopy[defender].armor > 1
        ? gamePlayersCopy[agresor].healt - gamePlayersCopy[defender].armor
        : 1
  }

  let actionButtons = {
    attack: () => {
      const newDefenderLife = attack.defender.healt(playerStatus)
      gamePlayersCopy[defender].healt = newDefenderLife
      finalActions.finishTurn()
    },
    breakArmor: () => {
      const updatedArmor = attack.defender.armor(playerStatus)
      gamePlayersCopy[defender].armor = updatedArmor
      finalActions.finishTurn()
    },
    passTurn: () => {
      const agresorHealt = gamePlayersCopy[agresor].healt
      gamePlayersCopy[agresor].healt = agresorHealt + 1
      finalActions.finishTurn()
    },
  }

  let finalActions = {
    switchPlayers: () => {
      setAggressor(defender)
      setDefender(agresor)
    },
    updateHistory: () => {
      setHistory({ ...history, [turns]: gamePlayersCopy })
    },
    finishTurn: () => {
      if (playerStatus.agresorHealt <= 0) {
        gamePlayersCopy[agresor].healt = 0
        alert("El juego se reiniciará")
        window.location.reload(true)
      }
      setTurns(turns + 1)
      setGamePlayers(gamePlayersCopy)
      setHistory({ ...history, [turns]: gamePlayersCopy })
      finalActions.switchPlayers()
    },
  }

  return (
    <div className='App' id={agresor === 'playerOne' ? 'bgColorBlue' : 'bgColorRed'}>
      <h1>Batalla en el Inframundo</h1>
      <PlayerTurn agresor={agresor} />
      <div className='actionsWrapper'>
        <div className='warriors' id='warrior-left'>
          <Warriors player={gamePlayersCopy.playerOne} />
        </div>
        <div className='vsDiv'>vs</div>
        <div className='warriors' id='warrior-right'>
          <Warriors player={gamePlayersCopy.playerTwo} />
        </div>
      </div>
      <ActionsMenu damage={playerStatus.damage} actionButtons={actionButtons} />
      <RoundCounter turns={turns} />
    </div>
  )
}

export default App
