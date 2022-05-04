const Router = require('express').Router()
const controller = require('../controllers/PostController')

Router.get('/trending', controller.GetPopularPosts)
Router.get('/recents', controller.GetRecentPosts)

Router.get('/view/:post_id', controller.GetTwertDetails)
Router.post('/:user_id', controller.CreatePost)
Router.put('/:id', controller.UpdatePost)
Router.delete('/:id', controller.DeletePost)

module.exports = Router