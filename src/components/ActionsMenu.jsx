import React from "react"
import { Popup, Rating } from "semantic-ui-react"
import sword from "../images/sword.png"
import shield from "../images/shield.png"
import beer from "../images/beer.png"

function ActionsMenu(props) {
  const agg = props.agresor === "playerOne" ? "bottom" : "left"

  function AttackModal() {
    return (
      <div className='modals'>
        <Popup
          trigger={
            <div
              className='icons'
              id='attackHealt'
              onClick={() => props.attackHp()}>
              {" "}
              <img src={sword} alt='swords' /> <div>atacar</div>
              <p id='damageHealt'></p>
            </div>
          }
          position={"bottom center"}
          closeOnDocumentClick>
          <div className='modalHeader'>
            <Popup.Header>Ataque de daño: {props.damage}</Popup.Header>
          </div>
          <div className='modalContent'>
            <Popup.Content>
              <Rating
                icon='star'
                defaultRating={props.damage}
                maxRating={props.defenderHealt}
              />
            </Popup.Content>
          </div>
        </Popup>
      </div>
    )
  }

  function WeakenModal() {
    return (
      <Popup
        trigger={
          <div
            className='icons'
            id='attackArmor'
            onClick={() => props.attackDef()}>
            <img src={shield} alt='shields' />
            <div>debilitar</div>
          </div>
        }
        position='bottom center'
        closeOnDocumentClick>
        <div className='modalHeader'>
          <Popup.Header>Ataque de armadura: 1</Popup.Header>
        </div>
        <div className='modalContent'>
          <Popup.Content>
            <Rating
              icon='star'
              defaultRating={1}
              maxRating={3}
            />
          </Popup.Content>
        </div>
      </Popup>
    )
  }

  function PassModal() {
    return (
      <Popup
        trigger={
          <div
            className='icons'
            onClick={() => {
            props.updateAgresorStat()
              props.finishTurn()
            }}>
            <img src={beer} alt='beers' />
            <div>pasar</div>
          </div>
        }
        position='bottom center'
        closeOnDocumentClick>
        <div className='modalContent'>
          <span>
            Una <img src={beer} id='smallBeer' alt='beers' /> para recuperar{" "}
            <br></br> <b>1</b> punto de salud
          </span>
        </div>
      </Popup>
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
