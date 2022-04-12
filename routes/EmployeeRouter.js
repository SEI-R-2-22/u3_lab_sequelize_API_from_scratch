const Router = require('express').Router()
const controller = require('../controllers/EmployeeController')

Router.post('/:restaurant_id', controller.CreateEmployee)

module.exports = Router
