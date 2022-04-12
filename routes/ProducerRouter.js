const Router = require('express').Router()
const controller = require('../controllers/ProducerController')

Router.get('/', controller.getAllProducers)
Router.post('/', controller.createProducer)
Router.put('/:producer_id', controller.updateProducer)
Router.get('/:producer_id', controller.getProducerById)
Router.delete('/:producer_id', controller.destroyProducer)

module.exports = Router
