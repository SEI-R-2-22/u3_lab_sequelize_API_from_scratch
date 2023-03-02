const Router = require('express').Router()
const UserRouter = require('./UserRouter')
const PostRouter = require('./PostRouter')
const FavoritesRouter = require('./FavoritesRouter')
Router.use('/users', UserRouter)
Router.use('/posts', PostRouter)
Router.use('/favorites', FavoritesRouter)
module.exports = Router