const Router = require('express').Router()
const AlbumRouter = require('./AlbumRouter')
const SongRouter = require('./SongRouter')

Router.use('/albums/songs', SongRouter)
Router.use('/albums', AlbumRouter)


module.exports = Router