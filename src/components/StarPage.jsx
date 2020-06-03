import React from "react"
import "../styles/StarPage.css"
import Stats from "../models/stats.json"
import Warrior from "../components/Warriors"
import { useState } from "react"

function StarPage(props) {
  const [userInput, setUserInput] = useState("")
  const [hero, setHero] = useState("heMan")
  const [cont, setCont] = useState(1)

  let playerOne = Stats.heMan
  let playerTwo = Stats.iceMan
  let stats = Object.entries(Stats)
  console.log(playerOne)

  let confirm = () => {
      const name = userInput
      if (cont === 1) {
        playerOne = {...playerOne, name: name}
      }
      else {
        playerTwo = {...playerTwo, }
      }
      console.log(playerOne)
  }

  return (
    <div className='main'>
      <h2>escribe un nombre para el jugador 1</h2>
      <input
        type='text'
        placeholder={hero}
        onChange={(event) => setUserInput(event.target.value)}
      />
      <h2>elige un héroe</h2>
      <div className='choosePlayer'>
        {stats.map((e, idx) => (
          <a
            className='playerCard'
            // value={e[0]}
            key={idx}
            onClick={() => setHero(e[0])}>
            <Warrior player={e[1]} />
            {e[1].avatar}
          </a>
        ))}
      </div>
      <h3 className={"button"} onClick={() => confirm()}>
        confirmar jugador {cont}
      </h3>
    </div>
  )
}

export default StarPage
