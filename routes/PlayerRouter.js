const Router = require('express').Router()
const controller = require('../controllers/PlayerController')

Router.get('/view', controller.GetPlayers)
Router.get('/:player_id', controller.GetPlayer)
Router.post('/:team_id', controller.CreatePlayer)
Router.put('/:player_id', controller.UpdatePlayer)
Router.delete('/:player_id', controller.DeletePlayer)
module.exports = Router