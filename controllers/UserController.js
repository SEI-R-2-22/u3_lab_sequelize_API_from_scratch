const { User, Posts } = require('../models')

const GetUser = async (req, res) => {
    try {
        const users = await User.findAll()
        res.send(users)
    } catch (error) {
        throw error
    }
}

const GetUserPost = async (req, res) => {
    try {
        const userAndPosts = await User.findByPk(req.params.user_id, {
            include: [{ model: Posts, as: 'posts' }]
        })
        res.send(userAndPosts)
    } catch (error) {
        throw error
    }
}

module.exports = {
    GetUser,
    GetUserPost
}