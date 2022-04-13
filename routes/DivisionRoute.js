const Router = require('express').Router()
const controller = require('../controllers/DivisionController');

Router.get('/divisions', controller.GetDivisions)

module.exports = Router