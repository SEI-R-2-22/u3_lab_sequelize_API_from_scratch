// 'use strict';

// module.exports = {
//   up: async (queryInterface, Sequelize) => {
//    try {
//       await queryInterface.addColumn('reviews','ownerId',{
//       type:Sequelize.INTEGER
//       });
//       await queryInterface.addColumn('reviews','productId',{
//       type:Sequelize.INTEGER
//       });
//       return Promise.resolve();
//     } catch (e) {
//       return Promise.reject(e)
//     }
//   },

//   down: async (queryInterface, Sequelize) => {
//     try {
//       await queryInterface.removeColumn('reviews','ownerId');
//       await queryInterface.removeColumn('reviews','productId');
//       return Promise.resolve();
//   } catch(e) {
//     return Promise.reject(e)
//   }
// }
// };