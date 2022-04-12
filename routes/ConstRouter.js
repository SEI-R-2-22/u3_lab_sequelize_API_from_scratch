const Router = require('express').Router()
const controller = require('../controllers/ConstController')

Router.get('/all', controller.GetAllConstellations)
Router.get('/view/:constellation_id', controller.FindConstellation)
Router.post('/create', controller.CreateNewConst)
Router.put('/:constellation_id', controller.UpdateConst)
Router.delete('/:constellation_id', controller.DeleteConst)

module.exports = Router
