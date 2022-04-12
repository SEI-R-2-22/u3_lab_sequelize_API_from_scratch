const { Comment } = require('../models')

const GetComments = async (req, res) => {
  try {
    let playerId = parseInt(req.params.player_id)
    const comments = await Comment.findAll({ where: { playerId: playerId } })
    res.send(comments)
  } catch (error) {
    throw error
  }
}

const CreateComment = async (req, res) => {
  try {
    let playerId = parseInt(req.params.player_id)
    let commentBody = {
      playerId,
      ...req.body
    }
    let comment = await Comment.create(commentBody)
    res.send(comment)
  } catch (error) {
    throw error
  }
}

const DeleteComment = async (req, res) => {
  try {
    let commentId = parseInt(req.params.comment_id)
    await Comment.destroy({ where: { id: commentId } })
    res.send({ message: `Deleted comment with an id of ${commentId}` })
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetComments,
  CreateComment,
  DeleteComment
}
