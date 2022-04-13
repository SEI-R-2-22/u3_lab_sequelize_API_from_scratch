const { Review, User } = require('../models')

const GetReviews = async (req, res) => {
    try {
        const review = await Review.findAll()
        res.send(review)
    } catch(error) {
        throw error
    }
}

const GetReviewDetails = async (req, res) => {
    try {
        const review = await Review.findByPk(req.params.review_id)
        res.send(review)
    }catch(error) {
        throw error
    }
}

const CreateReview = async (req, res) => {
    try{
        let userId = parseInt(req.params.user_id)
        let movieId = parseInt(req.params.twert_id)
        let commentBody = { userId, movieId, ...req.body }
        let comment = await Comment.create(commentBody)
        res.send(comment)
    } catch(error) {
        throw error
    }
}

const UpdateReview = async (req, res) => {
    try{
        let reviewId = parseInt(req.params.review_id)
        let updatedReview = await Review.update(req.body, {
            where: { id: reviewId },
            returning: true
        })
        res.send(updatedReview)
    } catch(error) {
        throw error
    }
}

const DeleteReview = async (req, res) => {
    try{
        let reviewId = parseInt(req.params.review_id)
        await Review.destroy({
            where: { id: reviewId }
        })
        res.send({ message: `Deleted review with an id of ${reviewId}`})
    } catch(error) {
        throw error
    }
}


module.exports = {
    GetReviews,
    GetReviewDetails,
    CreateReview,
    UpdateReview,
    DeleteReview

}