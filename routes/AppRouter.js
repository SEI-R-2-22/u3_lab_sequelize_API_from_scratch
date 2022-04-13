const Router = require('express').Router()
const UserRouter = require('./UserRouter')
const CommentRouter = require('./CommentRouter')
const PostRouter = require('./PostRouter')
Router.use('/users', UserRouter)
Router.use('/feed', PostRouter)
Router.use('/comments', CommentRouter)
module.exports = Router