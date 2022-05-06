const Router = require('express').Router()
const controller = require('../controllers/SongController')

Router.get('/', controller.GetAllSongs)
Router.post('/:artist_id/:album_id', controller.CreateSong)
Router.put('/:song_id', controller.UpdateSong)
Router.delete('/:song_id', controller.DeleteSong)

module.exports = Router