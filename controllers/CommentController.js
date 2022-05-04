const { Comment, User } = require('../models')
const { Op, literal, fn, col } = require('sequelize')


const GetPopularComments = async (req, res) => {
 try {
    const popular = await Comments.findAll({ order: [['likes', 'DESC']],
    attributes: [
        'id',
        'content',
        'likes' 
    ],
    where: { likes: { [Op.gt]: 3000 } }, 
    include: [
        { model: User, as: 'owner', attributes:['name', 'id'] },
        { model: Comment, as: 'comments', attributes: [] }
    ],
    group: ['Comments.id', 'owner.id']
})
res.send(popular)
} catch (error) {
    throw error
}
}
// Work Here
// Work Here

// Dont forget to export your functions
module.exports = {
 GetPopularComments
}
