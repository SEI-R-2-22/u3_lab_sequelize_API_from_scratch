const Router = require('express').Router()
const UserRouter = require('./UserRouter')
const RoutineRouter = require('./RoutineRouter')
const MovementRouter = require('./MovementRouter')
Router.use('/users', UserRouter)
Router.use('/routines', RoutineRouter)
Router.use('/movements', MovementRouter)
module.exports = Router
