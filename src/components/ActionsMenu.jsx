import React from "react"

//Icons
import sword from "../images/sword.png"
import shield from "../images/shield.png"
import beer from "../images/beer.png"
import ReactTooltip from "react-tooltip"

function ActionsMenu({ damage, actionButtons}) {
  function AttackBtn() {
    const msj = `tu ataque <br> dañará ${damage}  puntos <br> de SALUD`
    let color = "info"
    return (
      <div>
        <a data-tip={msj} href='/#'>
          <div
            className='icons hooverRed'
            onClick={() => actionButtons.attack()}>
            <img src={sword} alt='swords' /> <div>atacar</div>
          </div>
        </a>
        <ReactTooltip
          multiline={true}
          clickable={true}
          place='bottom'
          type={color}
          effect='float'
        />
      </div>
    )
  }

  function BreakArmorBtn() {
    const msj = `tu ataque <br> dañará ${1} puntos <br> de ARMADURA`
    return (
      <div>
        <a
          href='/#'
          data-tip={msj}
          className='icons hooverBlue'
          onClick={() => actionButtons.breakArmor()}>
          <img src={shield} alt='shields' />
          <div>debilitar</div>
        </a>
        {/* <ReactTooltip  place='bottom' type='info' effect='float' /> */}
      </div>
    )
  }

  function PassBtn() {
    const msj = `Una pola para <br> restaurar 1 punto <br> de salud`
    return (
      <a
        href='/#'
        data-tip={msj}
        className='icons hooverBrown'
        onClick={() => {
          actionButtons.passTurn()
        }}>
        <img src={beer} alt='beers' />
        <div>pasar</div>
      </a>
    )
  }

  return (
    <div className='buttonsWrapper'>
        <AttackBtn />
        <BreakArmorBtn />
        <PassBtn />
    </div>
  )
}

export default ActionsMenu
