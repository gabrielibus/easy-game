let attack = {
  defender: {
    healt: (states) => {
      const newDefenderLife =
        states.damage > 0
          ? states.defenderHealt - states.damage
          : (states.damage = 0 ? 0 : states.defenderHealt - 1)
      return newDefenderLife
    },
    armor: (states) => {
      const newDefenderArmor =
        states.defenderArmor - 1 >= 0 ? states.defenderArmor - 1 : 0
      return newDefenderArmor
    },
  },
  agresor: {
    healt: (states) => {
      const newAgresorLife = states.agresorHealt
      return newAgresorLife
    },
    armor: (states) => {
      const newAgresorArmor =
        states.defenderArmor - 1 >= 0 ? states.defenderArmor - 1 : 0
      return newAgresorArmor
    },
  },
}

module.exports = attack
