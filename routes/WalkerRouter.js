const Router = require('express').Router()
const controller = require('../controllers/WalkerController')

Router.get('/all', controller.GetAllWalkers)

Router.get('/:walkerId', controller.GetWalkerById)

Router.post('/:walkerId/:dogId', controller.CreateWalker)

Router.delete('/:walkerId', controller.DeleteWalker)

Router.put('/:walkerId', controller.UpdateWalker)

module.exports = Router
