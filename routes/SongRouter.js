const Router = require('express').Router()
const controller = require('../controllers/SongController')

Router.post('/:id/new', controller.AddSong)

module.exports = Router