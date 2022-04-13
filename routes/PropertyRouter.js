const Router = require('express').Router()
const controller = require('../controllers/PropertyController')

Router.get('/', controller.GetAllProperties)

Router.get('/:property_id', controller.GetPropertyDetails)
Router.post('/', controller.CreateProperty)
Router.put('/:property_id', controller.UpdateProperty)
Router.delete('/:property_id', controller.DeleteProperty)

module.exports = Router