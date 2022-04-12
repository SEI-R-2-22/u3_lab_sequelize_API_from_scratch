const Router = require('express').Router()
const controller = require('../controllers/AlbumController')

Router.get('/view/:album_id', controller.GetAlbum)

module.exports = Router
