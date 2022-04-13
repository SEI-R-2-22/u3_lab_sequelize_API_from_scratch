const { Comment } = require("../models")


const PostComment = async (req, res) => {
    try {
        let certId = parseInt(req.params.cert_id)
        console.log(certId)
        let comm = {
            certId,
            ...req.body
        }
        console.log(comm)
        let postComment = await Comment.create(comm)
        res.send(postComment)
      } catch (error) {
        throw error
      }
    }


const LikeComment = async (req, res) => {
    try {
        let commId = parseInt(req.params.comm_id)
        let LikeComment = await Comment.increment("likes", {
          where: { id: commId },
          returning: true
        })
        res.send(LikeComment)
      } catch (error) {
        throw error
      }
    }

const DislikeComment = async (req, res) => {
    try {
        let commId = parseInt(req.params.comm_id)
        let LikeComment = await Comment.decrement("likes", {
            where: { id: commId },
            returning: true
        })
        res.send(LikeComment)
        } catch (error) {
        throw error
        }
    }


module.exports = {
    LikeComment,
    PostComment,
    DislikeComment
}