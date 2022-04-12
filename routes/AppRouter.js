const Router = require('express').Router()
const TeamRouter = require('./TeamRouter')
// const PlayerRouter = require('./PlayerRouter')
// const CommentRouter = require('./CommentRouter')
Router.use('/teams', TeamRouter)
// Router.use('/players', PlayerRouter)
// Router.use('/comments', CommentRouter)
module.exports = Router
