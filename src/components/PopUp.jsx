import React from 'react'
import Popup from  'reactjs-popup'

const PopupExample = () => (
  <Popup     trigger={
    <button className="button">Trigger</button>
  }
  position="right center"
  closeOnDocumentClick
>
  <span> Popup content </span>
</Popup>

);

export default PopupExample