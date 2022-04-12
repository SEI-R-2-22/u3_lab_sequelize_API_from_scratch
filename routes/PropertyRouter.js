const Router = require('express').Router()
const controller = require('../controllers/PropertyController')

Router.get('/', controller.GetAllProperties)
Router.get('/:property_id', controller.GetProperty)

module.exports = Router