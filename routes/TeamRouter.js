const Router = require('express').Router()
const controller = require('../controllers/TeamController')

Router.get('/', controller.GetAllTeams)
Router.get('/:team_id', controller.GetTeamById)
Router.post('/new/:team_id', controller.CreateTeam)
Router.put('/:team_id', controller.UpdateTeam)
Router.delete('/:team_id', controller.DeleteTeam)

module.exports = Router
