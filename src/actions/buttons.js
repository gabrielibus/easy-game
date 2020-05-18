let buttons = {
    defender: {
      calcNewHealt: (states) => {
        const diff = states.defenderHealt - states.damage
        const newDefenderLife = diff > 0 ? diff : 0
        return newDefenderLife
      },
      calcNEwArmor: (states) => {
        const diff = states.defenderArmor - 1
        const newDefenderArmor = diff >= 0 ? diff : 0
        return newDefenderArmor
      },
    },
    agresor: {
      healt: (states) => {
        const diff = states.defenderHealt - states.damage
        const newAgresorLife = diff > 0 ? diff : 0
        return newAgresorLife
      },
      armor: (states) => {
        const diff = states.defenderHealt - states.damage
        const newAgresorArmor = diff > 0 ? diff : 0
        return newAgresorArmor
      },
    },
  }
  
  module.exports = attack
  