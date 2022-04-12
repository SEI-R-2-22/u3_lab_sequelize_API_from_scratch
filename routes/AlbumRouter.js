const Router = require('express').Router()
const controller = require('../controllers/AlbumController')

Router.get('/all', controller.GetAlbums)
Router.post('/new', controller.CreateAlbum)
Router.put('/:id', controller.UpdateAlbum)
Router.delete('/:id', controller.DeleteAlbum)



module.exports = Router