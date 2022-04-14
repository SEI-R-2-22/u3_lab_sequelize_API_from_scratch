const Router = require('express').Router()
const controller = require('../controllers/TeamController')

Router.get('/:team_id', controller.GetTeam)

module.exports = Router