'use strict'

const region = [
  {
    name: 'Kanto',
    description:
      'Kanto was the first region to be introduced in the game series. The theme for the location is that all towns are named after colors.',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'Johto',
    description:
      'Johto is located to the west of the Kanto region. The theme for locations in the Johto region is either plants or something related to a plant.',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'Alola',
    description:
      'This region has cold seas around it, as East Sea Shellos and Gastrodon inhabit it',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'Kalos',
    description:
      'Kalos region is based off France. It has warm seas around it, as West Sea Shellos and Gastrodon inhabit the region',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'Hoenn',
    description:
      'Hoenn is located to the southwest of Kanto and Johto. The theme for the locations in the Hoenn region is that of two words used together.',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'Galar',
    description:
      'It is based off the United Kingdom. The region has cold seas around it, as East Sea Shellos and Gastrodon inhabit it.',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'Sinnoh',
    description:
      'Sinnoh is located to the north of the Kanto region. Unlike other regions, there is no theme underlying the names of locations in Sinnoh.',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'Hisui',
    description:
      'Hisui is the region featured in the Generation VIII game Legends: Arceus. Hisui is the ancient version of Sinnoh where it is just being settled and discovered.',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'Unova',
    description:
      'The theme for the names of Unova locations is weather, specifically clouds, since a few of the places seem to be named after types of clouds.',
    createdAt: new Date(),
    updatedAt: new Date()
  }
]

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('regions', region, {})
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('regions', null, {})
  }
}
