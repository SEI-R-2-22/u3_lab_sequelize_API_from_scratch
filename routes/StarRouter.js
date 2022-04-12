const Router = require('express').Router()
const controller = require('../controllers/StarController')

Router.get('/all', controller.GetAllStars)
Router.get('/find/:star_id', controller.FindStar)
Router.post('/:constellation_id', controller.CreateStar)
Router.put('/:star_id', controller.UpdateStar)
Router.delete('/:star_id', controller.DeleteStar)

module.exports = Router
