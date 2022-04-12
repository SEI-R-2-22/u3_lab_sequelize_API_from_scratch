const Router = require('express').Router()
const controller = require('../controllers/BandController')

Router.get('/', controller.GetAllBands)
Router.get('/:band_id', controller.GetOneBand)
Router.post('/:band_id', controller.CreateBand)

module.exports = Router
