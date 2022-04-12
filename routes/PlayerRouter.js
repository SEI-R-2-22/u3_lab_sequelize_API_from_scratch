const Router = require('express').Router()
const controller = require('../controllers/PlayerController')

Router.get('/:team_id', controller.GetPlayers)
Router.post('/:team_id', controller.CreatePlayer)
Router.put('/:player_id', controller.UpdatePlayer)
Router.delete('/:player_id', controller.DeletePlayer)

module.exports = Router
