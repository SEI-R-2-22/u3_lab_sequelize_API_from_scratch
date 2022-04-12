const Router = require('express').Router()
const controller = require('../controllers/EpisodeController')

Router.get('/anime/:anime_id', controller.getAllEpisodesByAnime)
Router.get('/:episode_id', controller.getEpisodeById)
Router.post('/:anime_id', controller.createEpisode)
Router.put('/:episode_id', controller.updateEpisode)
Router.delete('/:episode_id', controller.destroyEpisode)

module.exports = Router
