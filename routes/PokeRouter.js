const Router = require('express').Router()
const controller = require('../controllers/PokeController')

Router.get('/all', controller.GetAllPoke)
// Implement these routes
Router.post('/newPoke',controller.newPoke)
Router.put('/update/:poke_id',controller.UpdatePoke)
Router.delete('/delete/:poke_id',controller.DeletePoke)
// Implement these routes
module.exports = Router
