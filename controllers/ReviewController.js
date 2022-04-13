
const { Review } = require('../models')

const GetReviews = async (req, res) => {
    try {
        const users = await Review.findAll()
        res.json(users)
    } catch (error) {
        throw error
    }
}

const GetReviewbyId = async (req,res) => {
    try {
        const reviewId = parseInt(req.params.reviewId)
        const review = await Review.findByPk(reviewId)
        res.json(review)
    } catch (error) {
        throw error
    }
}

module.exports = {
    GetReviews,
    GetReviewbyId
}