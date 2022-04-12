const Router = require('express').Router()
const controller = require('../controllers/ArtistController')

Router.get('/', controller.GetArtists)
Router.get('/:artist_id', controller.GetArtistDetails)
Router.post('/', controller.CreateArtist)
Router.put('/:artist_id', controller.UpdateArtist)
Router.delete('/:artist_id', controller.DestroyArtist)

module.exports = Router
