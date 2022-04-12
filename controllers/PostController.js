const { User, Post } = require('../models')

const GetPosts = async (req, res) => {
  try {
    const posts = await Post.findAll()
    res.send(posts)
  } catch (error) {
    throw error
  }
}

const GetPostDetail = async (req, res) => {
  try {
    const postDetail = await Post.findByPk(req.params.post_id)
    res.send(postDetail)
  } catch (error) {
    throw error
  }
}

const CreatePost = async (req, res) => {
  try {
    const userId = parseInt(req.params.user_id)
    const postBody = {
      userId,
      ...req.body
    }
    const newPost = await Post.create(postBody)
    res.send(newPost)
  } catch (error) {
    throw error
  }
}

const UpdatePost = async (req, res) => {
  try {
    const postId = req.params.post_id
    const newPostBody = req.body
    const updatedPost = await Post.update(newPostBody, {
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
    const postId = req.params.post_id
    await Post.destroy({ where: { id: postId } })
    res.send({ message: `deleted with id of ${postId}` })
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetPosts,
  GetPostDetail,
  CreatePost,
  UpdatePost,
  DeletePost

}