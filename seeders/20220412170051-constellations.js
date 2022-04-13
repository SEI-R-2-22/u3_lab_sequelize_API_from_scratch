'use strict'

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'constellations',
      [
        {
          name: 'Andromeda',
          origin: 'Ancient',
          meaning: 'Chained Princess',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Chamaeleon',
          origin: '1603, Uranometria',
          meaning: '',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Corona Australis',
          origin: 'Ancient',
          meaning: 'Southern Crown',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Corona Borealis',
          origin: 'Ancient',
          meaning: 'Northern Crown',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Eridanus',
          origin: 'Ancient',
          meaning: 'River Eridanus (Mythology)',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Gemini',
          origin: 'Ancient',
          meaning: 'Twins',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Monoceros',
          origin: '1613, Plancius',
          meaning: 'Unicorn',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Pavo',
          origin: '1603, Uranometria',
          meaning: 'Peacock',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Ursa Major',
          origin: 'Ancient',
          meaning: 'Great Bear',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Ursa Minor',
          origin: 'Ancient',
          meaning: 'Small Bear',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    )
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('constellations', null, {})
  }
}
