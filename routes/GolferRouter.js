const Router = require('express').Router()
const controller = require('../controllers/GolferController')

// You Do
// Implement Crud Operations For Comments
// You Do

Router.get('/:golfer_id', controller.GetGolferById)
Router.post('/:tournament_id', controller.CreateGolfer)
Router.delete('/:golfer_id', controller.DeleteGolfer)
Router.put('/:golfer_id', controller.UpdateRanking)

module.exports = Router
