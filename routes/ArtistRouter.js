const Router = require('express').Router()
const controller = require('../controllers/ArtistController')

Router.get('/', controller.GetArtists)
Router.get('/:artist_id', controller.GetArtistGallery)

module.exports = Router
