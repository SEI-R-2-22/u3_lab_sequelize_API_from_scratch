const Router = require('express').Router()
const controllers = require('../controllers/SeasonController')

Router.get('/', controllers.GetSeasons)

Router.post('/:show_id', controllers.CreateSeason)

Router.put('/:show_id', controllers.UpdatedSeason)

Router.delete('/:season_id', controllers.DeleteSeason)

module.exports = Router
