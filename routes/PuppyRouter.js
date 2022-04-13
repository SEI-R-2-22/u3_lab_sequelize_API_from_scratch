const Router = require('express').Router()
const controller = require('../controllers/PuppyController')

Router.get('/all', controller.GetPuppies)
Router.get('/view/:puppies_id', controller.GetPuppyProfile)
Router.post('/:user_id/:home_id', controller.CreatePuppy)
Router.put('/update/:puppies_id', controller.UpdatePuppy)
Router.delete('/delete/:puppies_id', controller.SendToFarm)

module.exports = Router