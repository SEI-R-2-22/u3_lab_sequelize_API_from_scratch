const Router = require('express').Router()
const controller = require('../controllers/AlbumController')


// Implement these routes
Router.get('/', controller.GetAllAlbums)
Router.get('/view/:album_id', controller.GetOneAlbum)
Router.post('/:band_id', controller.CreateAlbum)
Router.put('/:album_id', controller.UpdateAlbum)
Router.delete('/:album_id', controller.DeleteAlbum)
// Implement these routes
module.exports = Router
