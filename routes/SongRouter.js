const Router = require('express').Router()
const controller = require('../controllers/SongController')

Router.get('/view', controller.GetSongs)
Router.get('/view/:song_id', controller.GetSongsById)
Router.delete('/:song_id', controller.DeleteSong)

module.exports = Router
