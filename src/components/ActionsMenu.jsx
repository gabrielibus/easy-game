import React from "react"
import sword from "../images/sword.png"
import shield from "../images/shield.png"
import beer from "../images/beer.png"
import { Popup, Rating } from 'semantic-ui-react'
function ActionsMenu(props) {

  function AttackButton() {
    return (
      <Popup trigger={<div className='icons' id='attackHealt'> <img src={sword} alt='swords' /> <div>atacar</div><p id='damageHealt'></p></div>}
        position="top center"
        closeOnDocumentClick
      >
        <Popup.Header>Ataque de daño: {props.damage}</Popup.Header>
        <Popup.Content>
          <Rating icon='heart' defaultRating={props.damage} maxRating={props.defenderHealt} />
        </Popup.Content>
      </Popup>)
  }

  function WeakenMenu() {
    return (
      <Popup trigger={<div
        className='icons'
        id='attackArmor'
      >
        <img src={shield} alt='shields' />
        <div>debilitar</div>
      </div>}
        position="bottom center"
        closeOnDocumentClick>
        <Popup.Header>Ataque de armadura: {props.damage}</Popup.Header>
        <Popup.Content>
          <Rating icon='star' defaultRating={1} maxRating={props.defenderArmor} />
        </Popup.Content>
      </Popup>
    )
  }

  function Pass() {
    return (
      <Popup trigger={<div className='icons' >
        <img src={beer} alt='beers' />
        <div>pasar</div>
      </div>}
        position="bottom center"
        closeOnDocumentClick>
        <div className='modalChoice'>
          <span >Una pola y recupera 1 de salud</span>
          <br />
          <br />
          <div className='btnsChoice'>
            <div className='red' onClick={() => props.finishTurn()}>aceptar</div>
            <div className='blue'>cancelar</div>
          </div>
        </div>
      </Popup>
    )
  }


  return (
    <div className='actionsMenu'>
      <div className='iconsWrapper'>
        <AttackButton />
        <WeakenMenu />
        <Pass />
      </div>
    </div >
  )
}

export default ActionsMenu
