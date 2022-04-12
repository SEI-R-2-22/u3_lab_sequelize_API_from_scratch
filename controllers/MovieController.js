const { Movie, Actor, Genre } = require('../models')

const getMovies = async (req, res) => {
    try{
        const movies = await Movie.findAll()
        res.send(movies)
    }catch(error){
        throw error
    }
}

const createMovie = async (req, res) => {
    try{
        let movieBody = {
            ...req.body
        }
        let movie = await Movie.create(movieBody)
        res.send(movie)
    }catch(error){
        throw error
    }

}

const updateMovieYear = async (req, res) => {
    try{
        const movie_id = parseInt(req.params.movie_id)
        const updateMovie = await Movie.update(
            req.body, {
                where: {id: movie_id},
                returning: true
            }
        )
        res.send(updateMovie)
    }catch(error){
        throw error
    }
}

const deleteMovie = async (req, res) => {
    try{
        let movie_id = parseInt(req.params.id)
        await Movie.destroy({
            where: {id: movie_id}
        })
        res.send({message: `Deleted movie with an id of ${movie_id}` })
    }catch(error){
        throw error
    }
}


module.exports = {
    getMovies,
    createMovie,
    updateMovieYear,
    deleteMovie,
}