const UserRouter = require('express').Router()
const controller = require('../controllers/UserController')

UserRouter.get('/', controller.GetUsers)
UserRouter.get('/:user_id', controller.GetUserDetail)
UserRouter.post('/', controller.CreateUser)
UserRouter.put('/:user_id', controller.UpdateUser)
UserRouter.delete('/:user_id', controller.DeleteUser)


module.exports = UserRouter