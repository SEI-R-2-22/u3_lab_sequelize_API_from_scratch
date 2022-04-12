'use strict'

const pokemon = [
  {
    name: 'Bulbasaur',
    trainer: 'Ash Ketchum',
    type: 'Grass',
    region: 'Kanto'
  },

  {
    name: 'Staryu',
    trainer: 'Misty',
    type: 'Water',
    region: 'Kanto'
  },
  {
    name: 'Feebas',
    trainer: 'Nessa',
    type: 'Water',
    region: 'Galar'
  },
  {
    name: 'Pikachu',
    trainer: 'Ash Ketchum',
    type: 'Electric',
    region: 'Kanto'
  },
  {
    name: 'Drednaw',
    trainer: 'Nessa',
    type: 'Water',
    region: 'Galar'
  },
  {
    name: 'Quagsire',
    trainer: 'Nessa',
    type: 'Water & Ground',
    region: 'Galar'
  },
  {
    name: 'Gengar',
    trainer: 'Allister',
    type: 'Ghost',
    region: 'Galar'
  },
  {
    name: 'Haunter',
    trainer: 'Allister',
    type: 'Ghost',
    region: 'Galar'
  },
  {
    name: 'Gastly',
    trainer: 'Allister',
    type: 'Ghost',
    region: 'Galar'
  },
  {
    name: 'Cursola',
    trainer: 'Allister',
    type: 'Ghost',
    region: 'Galar'
  },
  {
    name: 'Mimikyu',
    trainer: 'Acerola',
    type: 'Ghost',
    region: 'Alola'
  },
  {
    name: 'Shuppet',
    trainer: 'Acerola',
    type: 'Ghost',
    region: 'Alola'
  },
  {
    name: 'Mudsdale',
    trainer: 'Acerola',
    type: 'Ground',
    region: 'Alola'
  },
  {
    name: 'Sandyghast',
    trainer: 'Acerola',
    type: 'Ground & Ghost',
    region: 'Alola'
  },
  {
    name: 'Charizard',
    trainer: 'Leon',
    type: 'Fire',
    region: 'Galar'
  },
  {
    name: 'Aegislash',
    trainer: 'Leon',
    type: 'Steal & Ghost',
    region: 'Galar'
  },
  {
    name: 'Dragapult',
    trainer: 'Leon',
    type: 'Dragon & Ghost',
    region: 'Galar'
  },
  {
    name: 'Wobbuffet',
    trainer: 'Jessie',
    type: 'Psychic',
    region: 'Johto'
  },
  {
    name: 'Meowth',
    trainer: 'Jessie',
    type: 'Normal',
    region: 'Kanto'
  },
  {
    name: 'Serviper',
    trainer: 'Jessie',
    type: 'Poison',
    region: 'Hoenn'
  },
  {
    name: 'Pumpkaboo',
    trainer: 'Jessie',
    type: 'Ghost & Grass',
    region: 'Kalos'
  },
  {
    name: 'Gyarados',
    trainer: 'Misty',
    type: 'Water & Flying',
    region: 'Kanto'
  },
  {
    name: 'Goldeen',
    trainer: 'Misty',
    type: 'Water',
    region: 'Kanto'
  },
  {
    name: 'Blastoise',
    trainer: 'Misty',
    type: 'Water',
    region: 'Kanto'
  },

  {
    name: 'Togepi',
    trainer: 'Misty',
    type: 'Fairy',
    region: 'Kanto'
  },

  {
    name: 'Geodude',
    trainer: 'Brock',
    type: 'Rock',
    region: 'Kanto'
  },

  {
    name: 'Onix',
    trainer: 'Brock',
    type: 'Rock',
    region: 'Kanto'
  },

  {
    name: 'Rhyhron',
    trainer: 'Brock',
    type: 'Fighting',
    region: 'Kanto'
  },

  {
    name: 'Kabutops',
    trainer: 'Brock',
    type: 'Rock & Water',
    region: 'Kanto'
  },

  {
    name: 'Arcanine',
    trainer: 'Red',
    type: 'Fire',
    region: 'Kanto'
  },
  {
    name: 'Charizard',
    trainer: 'Red',
    type: 'Fire',
    region: 'Kanto'
  },
  {
    name: 'Eevee',
    trainer: 'Elaine',
    type: 'Normal',
    region: 'Kanto'
  },
  {
    name: 'Mewtwo',
    trainer: 'Elaine',
    type: 'Psychic',
    region: 'Kanto'
  },
  {
    name: 'Rapidash',
    trainer: 'Elaine',
    type: 'Fire',
    region: 'Kanto'
  },

  {
    name: 'Psyduck',
    trainer: 'Misty',
    type: 'Water',
    region: 'Kanto'
  },

  {
    name: 'Emolga',
    trainer: 'Clemont',
    type: 'Electric',
    region: 'Kalos'
  },
  {
    name: 'Magneton',
    trainer: 'Clemont',
    type: 'Electric',
    region: 'Kalos'
  },
  {
    name: 'Heliolisk',
    trainer: 'Clemont',
    type: 'Electric',
    region: 'Kalos'
  },
  {
    name: 'Mr. Mime',
    trainer: 'Valerie',
    type: 'Psychic',
    region: 'Kalos'
  },
  {
    name: 'Sylveon',
    trainer: 'Valerie',
    type: 'Fairy',
    region: 'Kalos'
  }
]

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('pokemons', pokemon, {})
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('pokemons', null, {})
  }
}
