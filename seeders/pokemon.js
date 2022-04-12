'use strict'

const pokemon = [
  {
    name: 'Bulbasaur',
    trainer: 'Ash Ketchum',
    type: 'Grass',
    region: 'Kanto',
    createdAt: new Date(),
    updatedAt: new Date()
  },

  {
    name: 'Staryu',
    trainer: 'Misty',
    type: 'Water',
    region: 'Kanto',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'Feebas',
    trainer: 'Nessa',
    type: 'Water',
    region: 'Galar',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'Pikachu',
    trainer: 'Ash Ketchum',
    type: 'Electric',
    region: 'Kanto',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'Drednaw',
    trainer: 'Nessa',
    type: 'Water',
    region: 'Galar',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'Quagsire',
    trainer: 'Nessa',
    type: 'Water & Ground',
    region: 'Galar',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'Gengar',
    trainer: 'Allister',
    type: 'Ghost',
    region: 'Galar',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'Haunter',
    trainer: 'Allister',
    type: 'Ghost',
    region: 'Galar',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'Gastly',
    trainer: 'Allister',
    type: 'Ghost',
    region: 'Galar',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'Cursola',
    trainer: 'Allister',
    type: 'Ghost',
    region: 'Galar',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'Mimikyu',
    trainer: 'Acerola',
    type: 'Ghost',
    region: 'Alola',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'Shuppet',
    trainer: 'Acerola',
    type: 'Ghost',
    region: 'Alola',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'Mudsdale',
    trainer: 'Acerola',
    type: 'Ground',
    region: 'Alola',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'Sandyghast',
    trainer: 'Acerola',
    type: 'Ground & Ghost',
    region: 'Alola',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'Aegislash',
    trainer: 'Leon',
    type: 'Steal & Ghost',
    region: 'Galar',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'Dragapult',
    trainer: 'Leon',
    type: 'Dragon & Ghost',
    region: 'Galar',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'Wobbuffet',
    trainer: 'Jessie',
    type: 'Psychic',
    region: 'Johto',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'Meowth',
    trainer: 'Jessie',
    type: 'Normal',
    region: 'Kanto',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'Serviper',
    trainer: 'Jessie',
    type: 'Poison',
    region: 'Hoenn',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'Pumpkaboo',
    trainer: 'Jessie',
    type: 'Ghost & Grass',
    region: 'Kalos',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'Gyarados',
    trainer: 'Misty',
    type: 'Water & Flying',
    region: 'Kanto',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'Goldeen',
    trainer: 'Misty',
    type: 'Water',
    region: 'Kanto',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'Blastoise',
    trainer: 'Misty',
    type: 'Water',
    region: 'Kanto',
    createdAt: new Date(),
    updatedAt: new Date()
  },

  {
    name: 'Togepi',
    trainer: 'Misty',
    type: 'Fairy',
    region: 'Kanto',
    createdAt: new Date(),
    updatedAt: new Date()
  },

  {
    name: 'Geodude',
    trainer: 'Brock',
    type: 'Rock',
    region: 'Kanto',
    createdAt: new Date(),
    updatedAt: new Date()
  },

  {
    name: 'Onix',
    trainer: 'Brock',
    type: 'Rock',
    region: 'Kanto',
    createdAt: new Date(),
    updatedAt: new Date()
  },

  {
    name: 'Rhyhron',
    trainer: 'Brock',
    type: 'Fighting',
    region: 'Kanto',
    createdAt: new Date(),
    updatedAt: new Date()
  },

  {
    name: 'Kabutops',
    trainer: 'Brock',
    type: 'Rock & Water',
    region: 'Kanto',
    createdAt: new Date(),
    updatedAt: new Date()
  },

  {
    name: 'Arcanine',
    trainer: 'Red',
    type: 'Fire',
    region: 'Kanto',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'Charizard',
    trainer: 'Red',
    type: 'Fire',
    region: 'Kanto',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'Eevee',
    trainer: 'Elaine',
    type: 'Normal',
    region: 'Kanto',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'Mewtwo',
    trainer: 'Elaine',
    type: 'Psychic',
    region: 'Kanto',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'Rapidash',
    trainer: 'Elaine',
    type: 'Fire',
    region: 'Kanto',
    createdAt: new Date(),
    updatedAt: new Date()
  },

  {
    name: 'Psyduck',
    trainer: 'Misty',
    type: 'Water',
    region: 'Kanto',
    createdAt: new Date(),
    updatedAt: new Date()
  },

  {
    name: 'Emolga',
    trainer: 'Clemont',
    type: 'Electric',
    region: 'Kalos',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'Magneton',
    trainer: 'Clemont',
    type: 'Electric',
    region: 'Kalos',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'Heliolisk',
    trainer: 'Clemont',
    type: 'Electric',
    region: 'Kalos',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'Mr. Mime',
    trainer: 'Valerie',
    type: 'Psychic',
    region: 'Kalos',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'Sylveon',
    trainer: 'Valerie',
    type: 'Fairy',
    region: 'Kalos',
    createdAt: new Date(),
    updatedAt: new Date()
  }
]

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('pokemons', pokemon, {})
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('pokemons')
  }
}
