const Router = require('express').Router()
const ArtistRouter = require('./ArtistRouter')
const AlbumRouter = require('./AlbumRouter')
const TrackRouter = require('./TrackRouter')
Router.use('/artists', ArtistRouter)
Router.use('/albums', AlbumRouter)
Router.use('/tracks', TrackRouter)
module.exports = Router
