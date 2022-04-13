'use strict'

const { Parent } = require('../models')
const { School } = require('../models')
const falso = require('@ngneat/falso')
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const p = await Parent.findAll({ raw: true })
    const s = await School.findAll({ raw: true })
    const childrens = [...Array(200)].map((_) => {
      let r = Math.floor(Math.random() * p.length)
      let sc = Math.floor(Math.random() * s.length)
      return {
        name: falso.randFullName(),
        school_id: s[sc].id,
        parent_id: p[r].id
      }
    })
    await queryInterface.bulkInsert('childrens', childrens)
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('childrens')
  }
}

// const { children, sequelize } = require('../models')
// const falso = require('@ngneat/falso')

// module.exports = {
//   up: (queryInterface, Sequelize) => {
//     return children = await Promise.all()
//       queryInterface.bulkInsert(
//       'childrens',
//       [
//         {
//           name: 'Billy Ray',
//           schoolName: 'General Assembly',
//           parents: 'John Doe',
//           parentsId: 1,
//           createdAt: new Date(),
//           updatedAt: new Date()
//         }
//       ],
//       {}
//     )
//   },

//   down: (queryInterface, Sequelize) => {
//     return queryInterface.bulkDelete('childrens', null, {})
//   }
// }
