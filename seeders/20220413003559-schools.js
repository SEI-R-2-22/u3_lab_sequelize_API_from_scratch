'use strict'

const falso = require('@ngneat/falso')
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const schools = [...Array(10)].map((s) => ({
      name: falso.randWord(),
      population: falso.randNumber({ min: 1, max: 2000 }),
      uniform: true
    }))
    await queryInterface.bulkInsert('schools', schools)
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('schools')
  }
}

// module.exports = {
//   up: (queryInterface, Sequelize) => {
//     return queryInterface.bulkInsert(
//       'schools',
//       [
//         {
//           name: 'General Assembly',
//           population: 3000,
//           uniform: false,
//           createdAt: new Date(),
//           updatedAt: new Date()
//         }
//       ],
//       {}
//     )
//   },

//   down: (queryInterface, Sequelize) => {
//     return queryInterface.bulkDelete('schools', null, {})
//   }
// }
