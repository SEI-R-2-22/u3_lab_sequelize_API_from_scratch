const Router = require('express').Router()
const controller = require('../controllers/TrackController')

Router.get('/view/:album_id', controller.GetTracksByAlbum)
Router.post('/:artist_id/:album_id', controller.CreateTrack)
Router.put('/:track_id', controller.UpdateTrack)
Router.delete('/:track_id', controller.DestroyTrack)

module.exports = Router
