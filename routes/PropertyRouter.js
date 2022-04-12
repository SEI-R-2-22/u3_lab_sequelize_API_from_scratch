const Router = require('express').Router()
const controller = require('../controllers/PropertyController')

Router.get('/', controller.GetProperty)
Router.get('/:property_Id', controller.GetProperty)

module.exports = Router