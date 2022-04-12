const Router = require('express').Router()
const AlbumRouter = require('./AlbumRouter')
const SongRouter = require('./SongRouter')
const ArtistRouter = require('./ArtistRouter')

Router.use('/artists/albums/songs', SongRouter)
Router.use('/artists/albums', AlbumRouter)
Router.use('/artists', ArtistRouter)


module.exports = Router