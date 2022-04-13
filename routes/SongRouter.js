const Router = require('express').Router()
const controller = require('../controllers/SongController')

Router.get('/', controller.GetSongs)
Router.get('/:song_id', controller.GetSongsById)


module.exports = Router
