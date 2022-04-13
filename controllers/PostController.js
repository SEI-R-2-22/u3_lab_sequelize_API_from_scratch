const { User, Posts, Comment } = require('../models')
const { Op, literal, fn, col } = require('sequelize')

const GetPopularPosts = async (req, res) => {
 try {
    const popular = await Posts.findAll({
     order: [['likes', 'DESC']], 
     attributes: [
      'id',
      'content',
      'likes',
      [fn('COUNT', col('comments.id')), 'commentCount']
    ],
    where: { likes: { [Op.gt]: 3000 } }, 
    include: [
      { model: User, as: 'user', attributes: ['name', 'id'] },
      { model: Comment, as: 'comments', attributes: [] } 
    ],
    group: ['Posts.id', 'user.id']
})
res.send(popular)
} catch (error) {
    throw error
}
}

const GetRecentPosts = async (req, res) => {
    try {
      const recents = await Posts.findAll({ order: [['created_at', 'DESC']] })
      res.send(recents)
    } catch (error) {
      throw error
    }
  }

  const GetPostDetails = async (req, res) => {
    try {
      const Post = await Twerts.findByPk(req.params.twert_id)
      res.send(twert)
    } catch (error) {
      throw error
    }
  }


const CreatePost = async (req, res) => {
    try {
      let userId = parseInt(req.params.user_id)
      let postBody = {
        userId,
        ...req.body
       }

       let post = await Post.create(postBody)
       res.send(post)
    } catch (error){
        throw error
    }
}

const UpdatePost = async (req, res) => {
    try{
        let postId = parseInt(req.params.post_id)
        let updatedPost = await Posts.update(req.body, {
            where: { id: postId },
            returning: true
        })
        res.send(updatedPost)
    } catch(error) {
        throw error
    }
}

const DeletePost = async (req, res) => {
    try {
        let postId = parseInt(req.params.post_id)
        await Post.destroy({ where: { id: postId}})
        res.send({ message: `deleted post of ${postId}`})
    } catch (error){
        throw error
    }
}

module.exports = {
    GetPopularPosts,
    GetRecentPosts,
    GetPostDetails,
    CreatePost,
    UpdatePost,
    DeletePost
}