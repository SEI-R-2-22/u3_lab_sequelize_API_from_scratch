const { Movie } = require('../models')

const GetMovies = async (req, res) => {
    try{
        const movies = await Movie.findAll()
        res.send(movies)
    } catch(error) {
        throw error
    }
}

const GetMovieDetails = async (req, res) => {
    try{
        const movie = await Movie.findByPk(req.params.movie_id)
        res.send(movie)
    } catch(error) {
        throw error
    }
}

    
module.exports = {
    GetMovies,
    GetMovieDetails
}