const Router = require('express').Router()
const controller = require('../controllers/RoutineController')

Router.get('/', controller.GetAllWorkoutRoutines)
module.exports = Router
