import React from "react"
import sword from "../images/sword.png"
import shield from "../images/shield.png"
import beer from "../images/beer.png"

function ActionsMenu(props) {
  return (
    <div className='actionsMenu'>
      <div className='iconsWrapper'>
        <div className='icons' onClick={() => props.attackHp()}>
          <img src={sword} alt='swords' />
          <div> atacar</div>
        </div>
        <div className='icons' onClick={() => props.attackDef()}>
          <img src={shield} alt='shields' />
          <div> debilitar</div>
        </div>
        <div className='icons' onClick={() => props.finishTurn()}>
          <img src={beer} alt='beers' />
          <div> pasar</div>
        </div>
      </div>
    </div>
  )
}

export default ActionsMenu
