const Router = require('express').Router()
const controller = require('../controllers/GameController')

Router.get('/', controller.GetGames)
Router.get('/:gameId', controller.GetGameDetails)
Router.post('/:playerId', controller.PostGame )
Router.put('/:gameId', controller.UpdateGame)
Router.delete('/gameId', controller.DeleteGame)

module.exports = Router