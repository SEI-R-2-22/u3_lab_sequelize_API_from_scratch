const Router = require('express').Router()
const { Route } = require('express')
const controller = require('../controllers/UserController')

Router.get('/', controller.GetUser)
Router.post('/create', controller.CreateUser)
Router.put('/update/:user_id', controller.UpdateUser)
Router.delete('/delete/:user_id', controller.DeleteUser)

module.exports = Router
