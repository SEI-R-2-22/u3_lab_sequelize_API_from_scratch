'use strict';
const { Movie, Screen, sequelize } = require ('../models')
const {Op} = require('sequelize')
const falso = require('@ngneat/falso')

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    
    Showtime structure:
    movieId:
    screenId:
    time: (string)
    price: (int)
    soldout: (bool)
    */



    const showtimes = await Promise.all(
      [...Array(250)].map(async () => {
        let movie = await Movie.findOne({order: sequelize.random()})
        let screen = await Screen.findOne({order: sequelize.random()})

        return {
          movieId: movie.id,
          screenId: screen.id,
          date: falso.randSoonDate({days: 7}),
          time: `${falso.randNumber({max:23})}:${falso.randNumber({min:0,max:5})}${falso.randNumber({min:0,max:9})}`,
          price: falso.rand([20,25,15,30]),
          soldout: falso.randBoolean()
        }
      })
    )
    return queryInterface.bulkInsert('showtimes',showtimes)

  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('showtimes')
  }
};
