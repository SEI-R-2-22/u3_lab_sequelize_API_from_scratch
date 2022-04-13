'use strict';
const falso = require('@ngneat/falso');


const albums = [
  {
  name: falso.randFirstName(),
  songs: 21,
  band_id: 0,
  create_at: new Date(),
  update_at: new Date()
  },
  {
    name: falso.randFirstName(),
    songs: 16,
    band_id: 1,
    create_at: new Date(),
    update_at: new Date()
  },
  {
    name: falso.randFirstName(),
    songs: 9,
    band_id: 2,
    create_at: new Date(),
    update_at: new Date()
  },
  {
    name: falso.randFirstName(),
    songs: 13,
    band_id: 3,
    create_at: new Date(),
    update_at: new Date()
  },
  {
    name: falso.randFirstName(),
    songs: 11,
    band_id: 4,
    create_at: new Date(),
    update_at: new Date()
  },
  {
    name: falso.randFirstName(),
    songs: 12,
    band_id: 5,
    create_at: new Date(),
    update_at: new Date()
  },
  {
    name: falso.randFirstName(),
    songs: 10,
    band_id: 6,
    create_at: new Date(),
    update_at: new Date()
  },
  {
    name: falso.randFirstName(),
    songs: 14,
    band_id: 0,
    create_at: new Date(),
    update_at: new Date()
    },
    {
      name: falso.randFirstName(),
      songs: 13,
      band_id: 1,
      create_at: new Date(),
      update_at: new Date()
    },
    {
      name: falso.randFirstName(),
      songs: 12,
      band_id: 2,
      create_at: new Date(),
      update_at: new Date()
    },
    {
      name: falso.randFirstName(),
      songs: 10,
      band_id: 3,
      create_at: new Date(),
      update_at: new Date()
    },
    {
      name: falso.randFirstName(),
      songs: 15,
      band_id: 4,
      create_at: new Date(),
      update_at: new Date()
    },
    {
      name: falso.randFirstName(),
      songs: 13,
      band_id: 5,
      create_at: new Date(),
      update_at: new Date()
    },
    {
      name: falso.randFirstName(),
      songs: 22,
      band_id: 6,
      create_at: new Date(),
      update_at: new Date()
    },

]

module.exports = {
  up : async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('albums', albums)
  },

  down : async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('albums', null, {})
  }
};
