const Router = require('express').Router()
const ArtistRouter = require('./ArtistRouter')
const AlbumRouter = require('./AlbumRouter')
const SongRouter = require('./SongRouter')
Router.use('/artists', ArtistRouter)
Router.use('/albums', AlbumRouter)
Router.use('/songs', SongRouter)
module.exports = Router