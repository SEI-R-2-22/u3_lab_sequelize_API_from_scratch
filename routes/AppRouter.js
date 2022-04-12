const Router = require('express').Router()
const UserRouter = require('./UserRouter')
//const DogRouter = require('./DogRouter')
//const WalkerRouter = require('./WalkerRouter')
Router.use('/users', UserRouter)
//Router.use('/dogs', DogRouter)
//Router.use('/walkers', WalkerRouter)
module.exports = Router
