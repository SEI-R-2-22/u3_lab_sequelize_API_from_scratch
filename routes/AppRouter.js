const Router = require('express').Router()
// const ConferenceRouter = require('./ConferenceRoute')
const DivisionRouter = require('./DivisionRoute')
const TeamRouter = require('./TeamRoute')

// Router.use('/conference', ConferenceRouter)
Router.use('/division', DivisionRouter)
Router.use('/team', TeamRouter)

module.exports = Router