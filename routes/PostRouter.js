const PostRouter = require('express').Router()
const controller = require('../controllers/PostController')

PostRouter.get('/', controller.GetPosts)
PostRouter.get('/:post_id', controller.GetPostDetail)
PostRouter.post('/:user_id', controller.CreatePost)
PostRouter.put('/:post_id', controller.UpdatePost)
PostRouter.delete('/:post_id', controller.DeletePost)

module.exports = PostRouter