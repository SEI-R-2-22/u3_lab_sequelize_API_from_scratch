const Router = require('express').Router()
const controller = require('../controllers/UserController')

Router.get('/', controller.GetAllProfiles)
Router.get('/:user_id', controller.GetUserProfile)

module.exports = Router