'use strict'

const trainer = [
  {
    name: 'Ash Ketchum',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'Misty',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'Nessa',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'Allister',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'Jessie',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'Valerie',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'Clemont',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'Acerola',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'Brock',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'Red',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'Leon',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'Elaine',
    createdAt: new Date(),
    updatedAt: new Date()
  }
]

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('trainers', trainer, {})
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('trainers', null, {})
  }
}
