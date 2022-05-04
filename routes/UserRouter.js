const Router = require('express').Router()
const controller = require('../controllers/UserController')

Router.get('/')
Router.get('/:owner_id' )

module.exports = Router