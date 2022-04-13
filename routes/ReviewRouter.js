const Router = require('express').Router()
const controller = require('../controllers/ReviewController')

//Get all reviews
Router.get('/', controller.GetReviews)

// Get review by Id
Router.get('/reviewId', controller.GetReviewbyId)

// //Create review
// Router.post('/')

// //Update review
// Router.put('/:reviewId')

// // Delete a review
// Router.delete('/:reviewId')

module.exports = Router