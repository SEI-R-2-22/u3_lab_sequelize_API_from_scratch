const Router = require('express').Router()
const controller = require('../controllers/CommentController')


Router.post('/:cert_id', controller.PostComment)
Router.put('/like/:comm_id', controller.LikeComment)
Router.put('/dislike/:comm_id', controller.DislikeComment)


module.exports = Router