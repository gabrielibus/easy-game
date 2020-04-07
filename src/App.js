import React, { useState } from "react"
import "./styles/App.css"
import defaultStats from "./models/stats.json"
import actions from "./actions/actions.js"

/* STEPS! 
  1. Create a json with initial stats
  2. Create states for players and scores
  3. Create Divs structure for playes score
  4. Create Divs sctructure for actions menu
  5. Creacte actions:
    a. attack: 


*/

function App() {
  // const temp = Object.entries(defaultStats)
  const [playerOne, setPlayerOne] = useState(defaultStats.playerOne)
  const [playerTwo, setPlayerTwo] = useState(defaultStats.playerTwo)
  const [agresor, setAggressor] = useState("playerOne")
  const [defender, setDefender] = useState("playerTwo")
  const [turns, setTurns] = useState(1)
  const players = { playerOne, playerTwo }

  let entries = (obj) => {
    return Object.entries(obj)
  }

  let switchPlayers = () => {
    setAggressor(defender)
    setDefender(agresor)
  }

  let updateStat = (key, value) => {
    agresor === "playerOne"
      ? setPlayerTwo({ ...playerTwo, [key]: value })
      : setPlayerOne({ ...playerOne, [key]: value })
  }

  let attackHp = () => {
    let damage = Math.abs(players[agresor].hp - players[defender].def)
    let newHp = players[defender].hp - damage
    damage > 0 ? updateStat("hp", newHp) : updateStat("hp", newHp - 1)
    finishTurn()
  }

  let attackDef = () => {
    let newDef = players[defender].def - 1
    updateStat("def", newDef)
    finishTurn()
  }

  let items = (idx) => {alert(idx+1)}

  let finishTurn = () => {
    setTurns(turns + 1)
    switchPlayers()
  }

  return (
    <div className='App'>
      <h1>my turns based game</h1>
      <h5>turn {turns}</h5>
      <div className='arenaWrapper'>
        <div className='playerOne'>
          {entries(playerOne).map((e, index) => (
            <table>
              <thead>
                <tr>
                  <th>{e[0]}</th>
                  <td>{e[1]}</td>
                </tr>
              </thead>
            </table>
          ))}
        </div>
        <div className='playerTwo'>
          {entries(playerTwo).map((e, index) => (
            <table>
              <thead>
                <tr>
                  <th>{e[0]}</th>
                  <td>{e[1]}</td>
                </tr>
              </thead>
            </table>
          ))}
        </div>
      </div>
      <div className='actionsWrapper'>
        <h3> {agresor} turn </h3>
        <button onClick={() => attackHp()}>atacar</button>
        <button onClick={() => attackDef()}>romper armadura</button>
        <button>magia</button>
        <div className='items'>
          <h5>items</h5>
          {players[agresor].items.map((e, idx) => (
            <button key={idx} onClick={() => items(idx)}>
              {e[0]}: {e[1]}
            </button>
          ))}
        </div>
        <button onClick={() => finishTurn()}>finalizar</button>
      </div>
    </div>
  )
}

export default App
