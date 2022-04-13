const Router = require('express').Router()
const controller = require('../controllers/Usercontroller')

Router.get('/users', controller.getUsers)
Router.get('/:user_id', controller.getUserProfile)

module.exports = Router