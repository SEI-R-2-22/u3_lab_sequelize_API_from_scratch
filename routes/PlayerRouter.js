const Router = require('express').Router()
const controller = require('../controllers/PlayerController')

Router.get('/', controller.getPlayers)


module.exports = Router