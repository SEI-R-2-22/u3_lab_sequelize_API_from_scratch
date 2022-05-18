const Router = require('express').Router()
const controller = require('../controllers/ChildrenController')

Router.get('/chidren/:children_id', controller.GetChildrenDetails)
Router.post('/children/:school_id', controller.AddChild)
Router.put('/children/:children_id', controller.UpdateChildInfo)
Router.delete('/children/:children_id', controller.UnenrollChild)

module.exports = Router
