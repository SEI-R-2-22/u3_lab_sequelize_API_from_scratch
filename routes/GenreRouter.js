const Router = require('express').Router()
const controller = require('../controllers/GenreController')

Router.get('/genreAndMovie', controller.getGenreWithMovie)

module.exports = Router