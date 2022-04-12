const Router = require('express').Router()
const GardenRouter = require('./GardenRouter')
const PlantRouter = require('./PlantRouter')
const SeasonRouter = require('./SeasonRouter')
Router.use('/gardens', GardenRouter)
Router.use('/plant', PlantRouter)
Router.use('/season', SeasonRouter)
module.exports = Router
