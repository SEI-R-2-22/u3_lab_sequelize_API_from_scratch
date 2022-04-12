const Router = require('express').Router()
const controller = require('../controllers/ArtistController')

Router.post('/new', controller.CreateArtist)

module.exports = Router