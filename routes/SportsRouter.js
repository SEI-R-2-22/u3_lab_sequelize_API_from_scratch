const Router = require('express').Router()
const controller = require('../controllers/SportsController')


Router.get('/', controller.GetAllSports)
Router.post('/:athlete_id', controller.CreateSport)
Router.put('/:_id', controller.UpdateSport)
Router.delete('/:_id', controller.DeleteSport)

module.exports = Router