const Router = require('express').Router()
const controller = require('../controllers/AlbumController')

Router.get('/', controller.GetAlbums)

module.exports = Router