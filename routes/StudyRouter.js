const Router = require('express').Router()
const controller = require('../controllers/StudyController')


Router.post('/new/:cert_id', controller.PostStudy)

module.exports = Router