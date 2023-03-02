const PostRouter = require('express').Router()
const controller = require('../controllers/FavoriteController')

PostRouter.get('/', controller.GetFavorites)
PostRouter.get('/:user_id', controller.GetUserFavorites)
PostRouter.post('/:user_id', controller.CreateFavorites)
PostRouter.delete('/:user_id', controller.DeleteFavorites)
PostRouter.put('/:user_id', controller.addFavorite)

module.exports = PostRouter