

const Router = require('express').Router()
const controller = require('../controllers/UserController')

//Get all User
Router.get('/', controller.GetUsers )

// Get User by Id
Router.get('/:userId', controller.GerUserbyId)

//Create User
Router.post('/', controller.CreateUser)

//Update User
Router.put('/:userId', controller.UpdateUser)

// Delete a user
Router.delete('/:userId', controller.DeleteUser)

module.exports = Router