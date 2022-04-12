const Router = require('express').Router()
const controller = require('../controllers/MovementController')

Router.get('/', controller.GetAllMovements)
Router.post('/:routine_id', controller.CreateMovement)
Router.put('/:movement_id', controller.UpdateMovement)
Router.delete('/:movement_id', controller.DeleteMovement)
module.exports = Router
