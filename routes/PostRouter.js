const Router = require('express').Router()
const controller = require('../controllers/PostController')

// Implement these routes
Router.get('/view/:post_id', controller.GetPostDetails)
Router.post('/:user_id', controller.CreatePost)
Router.put('/:post_id', controller.UpdatePost)
Router.delete('/:post_id', controller.DeletePost)
// Implement these routes
module.exports = Router