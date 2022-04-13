const { Movie, Actor } = require('../models')

const GetMovies = async (req, res) => {
  try {
    const movies = await Movie.findAll()
    res.send(movies)

  } catch (error) {
    throw error
  }
}

const GetMoviesAndActors = async (req, res) => {
    try {
        const moviesAndActors = await User.findByPk(req.params.movie_id, { include: [{ model: Actor, as: 'actors' }]
        })
        res.send(moviesAndActors)
        
    } catch (error) {
        throw error
    }
}

const CreateMovie = async (req, res) => {
  try {
    let movieId = parseInt(req.params.movie_id)
    let movieBody = {
      movieId, ...req.body
    }

    let newMovie = await Movie.create(movieBody)
    res.send(newMovie)

  } catch (error) {
    throw error
  }
}

const UpdateMovie = async (req, res) => {
  try {
    let movieId = parseInt(req.params.movie_id)
 
    let updatedMovie = await Movie.update(req.body, {
      where: { id: movieId },
      returning: true
    })
    res.send(updatedMovie)

  } catch (error) {
    throw error
  }
}

const DeleteMovie = async (req, res) => {
  try {
    let movieId = parseInt(req.params.movie_id)
    await Movie.destroy({
      where: { id: movieId } })
      res.send({ message: `Deleted movie with an id of ${movieId}`})
  } catch (error) {
    throw error
  }
}

module.exports = {
    GetMovies,
    GetMoviesAndActors,
    CreateMovie,
    UpdateMovie,
    DeleteMovie
}