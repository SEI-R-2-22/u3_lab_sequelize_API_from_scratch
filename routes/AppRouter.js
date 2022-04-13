const Router = require('express').Router()
const UserRouter = require('./UserRouter')
// const HouseholdRouter = require('./HouseholdRouter')
const PuppyRouter = require('./PuppyRouter')
Router.use('/users', UserRouter)
// Router.use('/households', HouseholdRouter)
Router.use('/puppies', PuppyRouter)
module.exports = Router