
let actions = {
    entries: (obj) => {
      return Object.entries(obj)
    },
    attackHp: (variables) => {
      const defenderLife = variables.defenderHealt - variables.damage
      if (variables.damage > 0) {
        defenderLife >= 0
          ? actions.updateDefenderStat("Healt", variables.defenderHealt - variables.damage)
          : actions.updateDefenderStat("Healt", 0)
      } else {
        actions.updateDefenderStat("Healt", variables.defenderHealt - 1)
      }
    },
    attackDef: (variables) => {
        const newValue = variables.defenderArmor - 1
      newValue >= 0
        ? actions.updateDefenderStat("Armor", variables.defenderArmor - 1)
        // ? actions.updateDefenderStat("Armor", variables.defenderArmor - 1)
        : actions.updateDefenderStat("Armor", 0)
    },
    spendItem: (itemArray) => {
    }
  }

  module.exports = actions