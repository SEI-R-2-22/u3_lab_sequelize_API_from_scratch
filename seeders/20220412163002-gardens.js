'use strict'

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'gardens',
      [
        {
          gardenType: 'Herb Garden',
          dirtType: 'Fertilized',
          plantType: 'Weed',
          waterSchedule: 'Weekly',
          plantCount: '6',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    )
    await queryInterface.bulkInsert(
      'plants',
      [
        {
          plantName: 'Dandilion',
          plantSeason: 'Spring',
          plantColor: 'Yellow',
          plantType: 'Weed',
          gardenId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    )
    await queryInterface.bulkInsert(
      'seasons',
      [
        {
          season: 'Spring',
          weather: 'Light Rain',
          gardenId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    )
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('gardens', null, {})
    await queryInterface.bulkDelete('plants', null, {})
    await queryInterface.bulkDelete('seasons', null, {})
  }
}
