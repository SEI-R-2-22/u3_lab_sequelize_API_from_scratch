'use strict'

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'stars',
      [
        {
          name: 'Alpheratz',
          type: 'B8',
          lightYears: '97',
          constellationId: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Alpha Chamaeleontis',
          type: 'F5',
          lightYears: '64',
          constellationId: 4,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Meridiana',
          type: 'A2V',
          lightYears: '125',
          constellationId: 5,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Alphecca',
          type: 'A0V',
          lightYears: '75',
          constellationId: 6,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Alphecca',
          type: 'A0V',
          lightYears: '75',
          constellationId: 6,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Achernar',
          type: 'B6',
          lightYears: '139',
          constellationId: 7,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Pollux',
          type: 'K0',
          lightYears: '34',
          constellationId: 8,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Beta Monocerotis',
          type: 'B4',
          lightYears: '700',
          constellationId: 9,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Peacock (a. Pavonis)',
          type: 'B3',
          lightYears: '179',
          constellationId: 10,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Alioth',
          type: 'A1',
          lightYears: '81',
          constellationId: 11,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Polaris',
          type: 'F7',
          lightYears: '430',
          constellationId: 12,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    )
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('stars', null, {})
  }
}
