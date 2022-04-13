const Router = require('express').Router()

const BandRouter = require('./BandRouter')
const AlbumRouter = require('./AlbumRouter')
const SongRouter = require('./SongRouter')


Router.use('/bands', BandRouter)
Router.use('/albums', AlbumRouter)
Router.use('/songs', SongRouter)

module.exports = Router