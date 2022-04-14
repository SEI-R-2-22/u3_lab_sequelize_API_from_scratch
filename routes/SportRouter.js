const Router = require('express').Router()
const controller = require('../controllers/SportController')

Router.get('/', controller.GetSports)

module.exports = Router

