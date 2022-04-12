const Router = require('express').Router()
const controller = require('../controllers/BandController')

Router.get('/', controller.GetAllBands)
Router.get('/:band_id', controller.GetOneBand)

module.exports = Router
