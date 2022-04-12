const Router = require('express').Router()
const controller = require('../controllers/SeasonController')

Router.get('/', controller.GetAllSeasons)

module.exports = Router
