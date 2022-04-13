const Router = require('express').Router()
const controller = require('../controllers/TeamController');

Router.get('/teams', controller.GetTeams)
Router.get('/:team_id', controller.GetTeamWithDiv)
Router.post('/division_id', controller.CreateTeam)
Router.put('/:team_id', controller.UpdateTeam)
Router.delete('/:team_id', controller.DeleteTeam)

module.exports = Router