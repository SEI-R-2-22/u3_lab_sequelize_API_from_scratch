const Router = require('express').Router()
const controller = require('../controllers/CertController.js')


Router.get('/all', controller.GetAllCert)

module.exports = Router