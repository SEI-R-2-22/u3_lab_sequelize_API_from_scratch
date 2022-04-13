const Router = require('express').Router()
const controllers = require('../controllers/ShowController')

Router.get('/', controllers.GetShows)

Router.get('/seasons/:show_id', controllers.GetShowSeasons)

Router.post('/create', controllers.CreateShow)

Router.put('/create/:show_id', controllers.UpdateShow)

Router.delete('/:show_id', controllers.DeleteShow)

Router.get('/:show_id', controllers.GetShowDetails)

module.exports = Router
