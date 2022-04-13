const Router = require('express').Router()
const controller = require('../controllers/PotteryController')

Router.get('/recents', controller.GetRecentPosts)
Router.post('/:artist_id', controller.CreatePotteryDetails)
Router.put('/:pottery_id', controller.UpdatePottery)
Router.delete('/:pottery_id', controller.DeletePottery)

module.exports = Router
