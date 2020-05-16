import React, { Component } from "react"
import sword from "../images/sword.png"
import shield from "../images/shield.png"
import beer from "../images/beer.png"

import ReactTooltip from "react-tooltip"

{
  /* 
<a data-tip="React-tooltip"> 
  ◕‿‿◕ 
</a>
<ReactTooltip 
  place="left" 
  type="error" 
  effect="float"
/> 

*/
}

function ActionsMenu(props) {
  function AttackModal() {
    const msj = `tu ataque <br> dañará ${props.statesCopy.damage}  puntos <br> de SALUD`
    let color = 'info'
    return (
      <div>
        <a data-tip={msj} className='modals'>
          <div
            accessKey='a'
            className='icons'
            id='attackHealt'
            onClick={() => props.actionsMenuActions.attackHp()}>
            {" "}
            <img src={sword} alt='swords' /> <div>atacar</div>
            <p id='damageHealt'></p>
          </div>
        </a>
        <ReactTooltip multiline='true' clickable='true' place='bottom' type={color} effect='float' />
      </div>
    )
  }



  function WeakenModal() {
    const msj = `tu ataque <br> dañará ${1} puntos <br> de ARMADURA`
    return (
      <div>
        <a
          data-tip={msj}
          accessKey='s'
          className='icons'
          id='attackArmor'
          onClick={() => props.actionsMenuActions.attackDef()}>
          <img src={shield} alt='shields' />
          <div>debilitar</div>
        </a>
        {/* <ReactTooltip  place='bottom' type='info' effect='float' /> */}
      </div>
    )
  }

  function PassModal() {
    const msj = `Una pola para <br> restaurar 1 punto <br> de salud`
    return (
      <a
        data-tip={msj}
        accessKey='p'
        className='icons'
        onClick={() => {
          props.actionsMenuActions.updateAgresorStat()
          props.actionsMenuActions.finishTurn()
        }}>
        <img src={beer} alt='beers' />
        <div>pasar</div>
      </a>
    )
  }

  return (
    <div className='actionsMenu'>
      <div className='iconsWrapper'>
        <AttackModal />
        <WeakenModal />
        <PassModal />
      </div>
    </div>
  )
}

export default ActionsMenu
