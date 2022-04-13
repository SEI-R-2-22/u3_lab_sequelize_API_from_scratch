const { User, Post, Comment } = require('../models')
const { Op, literal, fn, col } = require('sequelize')

const GetPostDetails = async (req, res) => {
  try {
    const post = await Post.findByPk(req.params.post_id)
    res.send(post)
  } catch (error) {
    throw error
  }
}

const CreatePost = async (req, res) => {
  try {
    let creatorId = parseInt(req.params.user_id)
    let postBody = {
      creatorId,
      ...req.body
    }
    let post = await Post.create(postBody)
    res.send(post)
  } catch (error) {
    throw error
  }
}

const UpdatePost = async (req, res) => {
  try {
    let postId = parseInt(req.params.post_id)

    let updatedPost = await Post.update(req.body, {
      where: { id: postId },
      returning: true
    })
    res.send(updatedPost)
  } catch (error) {
    throw error
  }
}

const DeletePost = async (req, res) => {
  try {
    let postId = parseInt(req.params.post_id)

    await Post.destroy({ where: { id: postId }})
    res.send({ message: `Deleted post with an id of ${postId}` })
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetPostDetails,
  CreatePost,
  UpdatePost,
  DeletePost
}
