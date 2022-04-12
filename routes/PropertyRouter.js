const Router = require('express').Router()
const controller = require('../controllers/PropertyController')

Router.get('/', controller.GetAllProperties)
Router.get('/:property_Id', controller.GetPropertyDetails)
Router.post('/', controller.CreateProperty)
Router.put('/:property_Id', controller.UpdateProperty)
Router.delete('/:property_id', controller.DeleteProperty)

module.exports = Router