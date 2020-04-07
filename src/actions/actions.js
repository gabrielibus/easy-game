

let actions = {
    entries: (obj) => {
      return Object.entries(obj)
    },
    attackHp: () => {
      let damage = players[agresor].hp - players[defender].def
      let newHp = players[defender].hp
      damage > 0
        ? actions.updateStat("hp", newHp - damage)
        : actions.updateStat("hp", newHp - 1)
      actions.finishTurn()
    },
    attackDef: () => {
      let newDef = players[defender].def - 1
      actions.updateStat("def", newDef)
      actions.finishTurn()
    },
    finishTurn: () => {
      setTurns(turns + 1)
      actions.switchPlayers()
    },
    items: (idx) => {
      alert(idx + 1)
    },
    switchPlayers: () => {
      setAggressor(defender)
      setDefender(agresor)
    },
    updateStat: (key, value) => {
      agresor === "playerOne"
        ? setPlayerTwo({ ...playerTwo, [key]: value })
        : setPlayerOne({ ...playerOne, [key]: value })
    },
  }

module.exports = actions
