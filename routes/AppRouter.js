const Router = require('express').Router()

// const UserRouter = require('./UserRouter')
// const ListRouter = require('./ListRouter')
const FoodRouter = require('./FoodRouter')
// Router.use('/users', UserRouter)
// Router.use('/list', ListRouter)
Router.use('/food', FoodRouter)

module.exports = Router
