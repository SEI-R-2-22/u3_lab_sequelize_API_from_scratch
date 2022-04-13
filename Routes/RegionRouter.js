const Router = require('express').Router()
const controllers = require('../Controllers/RegionController')

Router.get('/region', controllers.GetAllRegions)

module.exports = Router
