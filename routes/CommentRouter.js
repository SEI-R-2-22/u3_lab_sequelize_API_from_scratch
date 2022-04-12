const Router = require('express').Router()
const controller = require('../controllers/CommentController')

Router.get('/:player_id', controller.GetComments)
Router.post('/:player_id', controller.CreateComment)
Router.delete('/:comment_id', controller.DeleteComment)

module.exports = Router
