const Router = require('express').Router()
const UserRouter = require('./UserRouter')
const FoodRouter = require('./FoodRouter')
const ReviewRouter = require('./ReviewRouter')
Router.use('/users', UserRouter)
Router.use('/foods', FoodRouter)
Router.use('/reviews', ReviewRouter)
module.exports = Router