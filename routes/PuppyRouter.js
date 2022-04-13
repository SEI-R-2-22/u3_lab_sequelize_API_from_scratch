const Router = require('express').Router()
const controller = require('./controllers')

// Implement these routes
Router.get('/:puppy_id', controller.GetPuppyDetails)
Router.post('/:puppy_id', controller.CreatePuppy)
Router.put('/:puppy_id', controller.UpdatePuppy)
Router.delete('/:puppy_id', controller.DeletePuppy)
// Implement these routes
module.exports = Router
