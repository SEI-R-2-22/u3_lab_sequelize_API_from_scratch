const Router = require('express').Router()
const PuppyRouter = require('./PuppyRouter')
Router.use('/puppies', PuppyRouter)
module.exports = Router
