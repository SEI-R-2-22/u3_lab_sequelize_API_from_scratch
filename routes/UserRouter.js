const Router = require('express').Router()
const controller = require('../controllers/UserController')

Router.get('/all', controller.GetAllUsers)

Router.get('/:userId', controller.GetUserById)

Router.post('/:userId', controller.CreateUser)

Router.delete('/:userId', controller.DeleteUser)

Router.put('/:userId', controller.UpdateUser)

module.exports = Router
