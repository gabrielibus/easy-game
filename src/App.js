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
  const [scoreOne, setScoreOne] = useState("")
  const [scoreTwo, setScoreTwo] = useState("")
  const [turn, setTurn] = useState("playerOne")

  function entries(obj) {
    return Object.entries(obj)
  }

  // let cosa = (Object.entries(stats[0][1])).slice()
  // console.log(entries(playerOne))
  return (
    <div className='App'>
      <h1>my turns based game</h1>
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
        <h3> {turn} turn </h3>
        <button
          onClick={() => actions.attack(playerOne.healt, playerTwo.defense)}>
          atacar
        </button>
        <button>defender</button>
        <button>magia</button>
      </div>
    </div>
  )
}

export default App
