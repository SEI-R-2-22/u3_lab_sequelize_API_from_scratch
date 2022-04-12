const Router = require('express').Router()
const controller = require('../controllers/AnimeController')

Router.get('/', controller.getAllAnimes)
Router.get('/:anime_id', controller.getAnimeById)
Router.post('/:producer_id', controller.createAnime)
Router.put('/:anime_id', controller.updateAnime)
Router.delete('/:anime_id', controller.deleteAnime)

module.exports = Router
