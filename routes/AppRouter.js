const Router = require('express').Router()
const PlayerRouter = require('./PlayerRouter')
const GameRouter = require('./GameRouter')
const CommentRouter = require('./CommentRouter')
Router.use('/players', PlayerRouter)
Router.use('/game', GameRouter)
Router.use('/comments', CommentRouter)
module.exports = Router