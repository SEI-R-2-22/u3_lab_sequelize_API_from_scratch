const Router = require('express').Router()
const controller = require('../controllers/UserController')

Router.get('/users/view', controller.GetAllUsers)