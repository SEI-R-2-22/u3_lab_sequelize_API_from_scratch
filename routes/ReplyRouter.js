const Router = require('express').Router()
const controller = require('../controllers/ReplyController')



Router.get('/view/:quetion_id', controller.GetReplies)
Router.post('/:user_id/:question_id', controller.CreateReply)
Router.put('/:reply_id', controller.UpdateReply)
Router.delete('/:reply_id', controller.DeleteReply)


module.exports = Router
