const { Review } = require('../models')

const GetReviews = async (req, res) => {
  try {
    const reviews = await Review.findAll()
    res.send(reviews)
  } catch (error) {
    throw error
  }
}

const CreateReview = async (req, res) => {
  try {
    let userId = parseInt(req.params.user_id)
		let foodId = parseInt(req.params.food_id)
    let stars = parseInt(req.params.stars)
    let ReviewBody = {
      userId, foodId, stars,
      ...req.body
    }
    let newReview = await Review.create(ReviewBody)
    res.send(newReview)
  } catch (error) {
    throw error
  }
}

const UpdateReview = async (req, res) => {
  try {
    let reviewId = parseInt(req.params.review_id)
    let updatedReview = await Review.update(req.body,  {
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
    let reviewId = parseInt(req.params.review_id)
    await Review.destroy({ where: { id: reviewId } })
    res.send({ message: `Deleted review with an id of ${reviewId}` })
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetReviews,
	CreateReview,
  UpdateReview,
  DeleteReview
}
