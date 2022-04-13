const Router = require('express').Router()
const controller = require('../controllers/TournamentController')

// You Do
// Implement Crud Operations For Comments
// You Do

Router.get('/view', controller.GetAllTournaments)
Router.post('/post', controller.CreateTournament)
// Router.get('/view/:comment_id', controller.GetCommentDetails)
// Router.post('/:tournament_id', controller.CreateGolfer)
// Router.put('/:comment_id', controller.UpdateComment)
// Router.delete('/:comment_id', controller.DeleteComment)

module.exports = Router
