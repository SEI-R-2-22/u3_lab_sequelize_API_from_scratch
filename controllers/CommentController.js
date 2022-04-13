const { Comment, Post, User } = require('../models')
  
const CreateComment = async (req, res) => {
    try {
        let postId = parseInt(req.params.post_id)
        let creatorId = parseInt(req.params.user_id)
        
        let commentBody = {
            postId,
            creatorId,
            ...req.body
        }
        let comment = await Comment.create(commentBody)
        res.send(comment)
    } catch (error) {
        throw error
    }
}

  const GetCommentDetails = async (req, res) => {
    try {
      const comment = await Comment.findByPk(req.params.comment_id)
      res.send(comment)
    } catch (error) {
      throw error
    }
  }
  
  const UpdateComment = async (req, res) => {
    try {
      let commentId = parseInt(req.params.comment_id)
  
      let updatedComment = await Comment.update(req.body, {
        where: { id: commentId },
        returning: true
      })
      res.send(updatedComment)
    } catch (error) {
      throw error
    }
  }
  
  const DeleteComment = async (req, res) => {
    try {
      let commentId = parseInt(req.params.comment_id)
  
      await Comment.destroy({ where: { id: commentId }})
      res.send({ message: `Deleted comment with an id of ${commentId}` })
    } catch (error) {
      throw error
    }
  }

// Dont forget to export your functions
module.exports = {
    GetCommentDetails,
    CreateComment,
    UpdateComment,
    DeleteComment
}
