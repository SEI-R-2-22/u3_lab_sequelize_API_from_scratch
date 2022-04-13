const {Reply} = require('../models/reply')

const GetReplies = async (req, res) => {
    try{
        const replies = await Reply.findAll({where: {questionId: (req.params.question_id)}})
        res.send(replies)
    } catch (error) {
        throw error
    }
}

const CreateReply = async (req, res) => {
    try{
        let questionId = parseInt(req.params.question_id)
        let userId = parseInt(req.params.user_id)

        let replyBody = {
            questionId,
            userId,
            ...req.body
        }
        let reply = await Reply.create(replyBody)
        res.send(reply)

    } catch (error) {
        throw error
    }
}

const UpdateReply = async (req, res) => {
    try{
        let replyId = parseInt(req.params.reply_id)

        let updatedReply = await Reply.update(req.body, {
            where: { id: replyId },
            returning: true
        })

        res.send(updatedReply)

    } catch (error) {
        throw error
    }
}

const DeleteReply = async (req, res) => {
    try{
        let replyId = parseInt(req.params.reply_id)
        await Reply.destroy({where: { id: replyId }})
        res.send({message: `Deleted a reply with an id of ${replyId}`})

    } catch (error) {
        throw error
    }
}

module.exports = {
    GetReplies,
    CreateReply,
    UpdateReply,
    DeleteReply
}