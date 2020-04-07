import React, { useState } from "react"
import "./styles/App.css"
import defaultStats from "./models/stats.json"
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
  
  let actions = {
    entries: (obj) => {
      return Object.entries(obj)
    },
    attackHp: () => {
      let damage = players[agresor].hp - players[defender].def
      let newHp = players[defender].hp
      damage > 0
      ? actions.updateDefenderStat("hp", newHp - damage)
      : actions.updateDefenderStat("hp", newHp - 1)
      actions.finishTurn()
    },
    attackDef: () => {
      let newDef = players[defender].def
      actions.updateDefenderStat("def", newDef - 1)
      actions.finishTurn()
    },
    finishTurn: () => {
      setTurns(turns + 1)
      actions.switchPlayers()
    },
    // items: (name) => {
      //   let agresorHp = players[agresor].hp
      //   let agresorDef = players[agresor].def
      //   name[0] === 'cure'
      //   ? items.cure(agresorHp)
      //   : items.fixArmor(agresorDef)
      //   // idx === 0 ? up
      
      //   actions.updateAgresorStat('def', agresorHp + 2)
    //   actions.finishTurn()
    // },
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
    }
  }
  
    let items = {
      cure: () => {
        const agresorHp = players[agresor].hp
        actions.updateAgresorStat('hp', agresorHp + 2)
        actions.finishTurn()
      },
      fixArmor: () => {
        const agresorDef = players[agresor].def
        actions.updateAgresorStat('def', agresorDef + 2)
        actions.finishTurn()
      }
    }
  
  return (
    <div className='App'>
      <h1>my turns based game</h1>
      <h5>turn {turns}</h5>
      <div className='arenaWrapper'>
        <div className='playerOne' id={agresor === 'playerOne' ? 'active' : ''}>
          {actions.entries(playerOne).map((e, idx) => (
            <table key={idx}>
              <thead>
                <tr>
                  <th>{e[0]}</th>
                  <td>{e[1]}</td>
                </tr>
              </thead>
            </table>
          ))}
        </div>
        <div className='playerTwo' id={agresor === 'playerTwo' ? 'active' : ''}>
          {actions.entries(playerTwo).map((e, idx) => (
            <table key={idx}>
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
        <button onClick={() => actions.attackHp()}>atacar</button>
        <button onClick={() => actions.attackDef()}>romper armadura</button>
        <button>habilidades</button>
        <div className='items'>
          <h5>items</h5>
          {players[agresor].items.map((e, idx) => (
            <button key={idx} onClick={() => actions.helpItem(e)}>
              {e[0]}: {e[1]}
            </button>
          ))}
        </div>
        <button onClick={() => actions.finishTurn()}>finalizar</button>
      </div>
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
//   let damage = Math.abs(players[agresor].hp - players[defender].def)
//   let newHp = players[defender].hp - damage
//   damage > 0 ? updateDefStat("hp", newHp) : updateDefStat("hp", newHp - 1)
//   finishTurn()
// }

// let attackDef = () => {
//   let newDef = players[defender].def - 1
//   updateDefStat("def", newDef)
//   finishTurn()
// }

// let items = (idx) => {alert(idx+1)}

// let finishTurn = () => {
//   setTurns(turns + 1)
//   switchPlayers()
// }
