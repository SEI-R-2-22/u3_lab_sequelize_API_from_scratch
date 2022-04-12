const Router = require('express').Router()
const controller = require('../controllers/TeamController')

Router.get('/', controller.GetTeams)
Router.post('/', controller.CreateTeam)
Router.put('/:team_id', controller.UpdateTeam)
Router.delete('/:team_id', controller.DeleteTeam)

module.exports = Router
