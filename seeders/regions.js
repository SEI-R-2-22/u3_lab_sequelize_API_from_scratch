'use strict'

const region = [
  {
    name: 'Kanto',
    description:
      'Kanto was the first region to be introduced in the game series, featured in the Red, Blue and Yellow games along with the Generation III remakes and the Generation VII remakes. It is also accessible in the latter portion of Pokémon Gold, Silver, and Crystal after defeating the Elite Four. The theme for the location is that all towns are named after colors. The regional professor is Professor Oak who resides in Pallet Town.'
  },
  {
    name: 'Johto',
    description:
      'Johto is the second region introduced in the main game series, being featured in the Gold, Silver and Crystal games along with the Generation IV remakes. Geographically, Johto is located to the west of the Kanto region. The theme for locations in the Johto region is either plants or something related to a plant. The regional Pokémon professor is Professor Elm, who resides in New Bark Town.'
  },
  {
    name: 'Alola',
    description:
      "Alola is the seventh region that appeared in Generation VII's games Pokémon Sun and Moon and Pokémon Ultra Sun and Ultra Moon. The region has cold seas around it, as East Sea Shellos and Gastrodon inhabit it."
  },
  {
    name: 'Kalos',
    description:
      "Kalos is the sixth region that appeared in Generation VI's game Pokémon X and Y. It is based off France. The regional scientist is Professor Sycamore, living in Lumiose City. It has warm seas around it, as West Sea Shellos and Gastrodon inhabit the region"
  },
  {
    name: 'Hoenn',
    description:
      'Hoenn is the featured region in the Generation III games, Pokémon Ruby, Sapphire and Emerald games along with the Generation VI remakes. Geographically, Hoenn is located to the southwest of Kanto and Johto. The theme for the locations in the Hoenn region is that of two words used together. The regional Pokémon professor is Professor Birch, who resides in Littleroot Town.'
  },
  {
    name: 'Galar',
    description:
      "Galar is the eighth region that appeared in Generation VIII's game Pokémon Sword and Shield. It is based off the United Kingdom. The region has cold seas around it, as East Sea Shellos and Gastrodon inhabit it."
  },
  {
    name: 'Sinnoh',
    description:
      "Sinnoh is the region featured in the Generation IV games Pokémon Diamond, Pearl and Platinum games along with the Generation VIII remakes. Sinnoh is located to the north of the Kanto region. Unlike other regions, there is no theme underlying the names of locations in Sinnoh. The regional Pokémon professor is Professor Rowan, who resides in Sandgem Town, being the first professor to live in a town that is not the player's starting location. It was known as Hisui during the ancient past where it was just being settled down."
  },
  {
    name: 'Hisui',
    description:
      'Hisui is the region featured in the Generation VIII game Legends: Arceus. Hisui is the ancient version of Sinnoh where it is just being settled and discovered.'
  },
  {
    name: 'Unova',
    description:
      'Unova is the region featured in the Generation V games Pokémon Black and White and Black and White 2. It is said that Unova is located very far away from the other regions, needing a boat to get there. The theme for the names of Unova locations is weather, specifically clouds, since a few of the places seem to be named after types of clouds.'
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
