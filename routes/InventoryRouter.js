const Router = require('express').Router()
const controller = require('../controllers/InventoryController')

Router.post('/exoticimports', controller.CreateNewInventory)
Router.get('/allinventory', controller.GetAllInventory)

module.exports = Router
