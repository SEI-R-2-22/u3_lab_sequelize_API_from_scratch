const Router = require('express').Router()
// const express = require('express')
// const app = express()
const controller = require('../controllers/CharacterSheetController')

Router.post('/char', controller.createChar)
Router.get('/char', controller.pullChar)
Router.post('/char/class/:owner_id', controller.createCharClass)

module.exports = Router