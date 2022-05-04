const Router = require('express').Router()
const controller = require('../controllers/CommentController')



Router.get('/trending', controller.GetPopularComments)
Router.get('/recents')


module.exports = Router