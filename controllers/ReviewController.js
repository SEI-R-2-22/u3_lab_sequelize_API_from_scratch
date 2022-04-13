const { Review } = require('../models')

const GetReviewDetails = async (req, res) => {
  try {
    const reviews = await Review.findByPk(req.params.review_id)
    res.send(reviews)
  } catch (error) {
    throw error
  }
}

const CreateReview = async (req, res) => {
  try {
    const artistId = parseInt(req.params.artist_id)
    const potteryId = parseInt(req.params.pottery_id)
    const reviewBody = {
      artistId,
      potteryId,
      ...req.body
    }
    const review = await Review.create(reviewBody)
    res.send(review)
  } catch (error) {
    throw error
  }
}

const UpdateReview = async (req, res) => {
  try {
    const reviewId = parseInt(req.params.review_id)
    const updatedReview = await Review.update(req.body, {
      where: { id: reviewId },
      returning: true
    })
    res.send(updatedReview)
  } catch (error) {
    throw error
  }
}

const DeleteReview = async (req, res) => {
  try {
    const reviewId = parseInt(req.params.review_id)
    await Review.destroy({ where: { id: reviewId } })
    res.send({ message: `Deleted comment with an id of ${reviewId}` })
  } catch (error) {
    throw error
  }
}

// Dont forget to export your functions
module.exports = {
  GetReviewDetails,
  CreateReview,
  UpdateReview,
  DeleteReview
}
