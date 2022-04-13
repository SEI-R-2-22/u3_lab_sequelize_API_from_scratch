const { Movie, Showtime } = require('../models')

const GetAllMovies = async (req, res) => {
  try {
    const allMovies = await Movie.findAll()
    res.send(allMovies)
  } catch (error) {
    throw error
  }
}
const GetMovie = async (req, res) => {
  try{
    const movie = await Movie.findByPk(parseInt(req.params.movie_id))
    res.send(movie)
  } catch (error) {
    throw error
  }
}
const GetMovieShowtimes = async (req, res) => {
  try{
    let movId = parseInt(req.params.movie_id);
    const movie = await Movie.findOne({
      where: {id: movId}, 
      include: {model: Showtime},
      order: [[{model: Showtime}, 'date'],[{model: Showtime}, 'time', 'ASC']]
    })
    res.send(movie)
  } catch (error) {
    throw error
  }
}

const CreateMovie = async (req, res) => {
  try{
    const newMovie = await Movie.create(
      {...req.body}
    )
      res.send(newMovie)
    
  } catch (error) {
    throw error
  }
}

const UpdateMovie = async (req, res) => {
  try{
    let movieId = parseInt(req.params.movie_id);
    const update = await Movie.update(
      req.body,
      {
        where: {id: movieId},
        returning: true
      }
    )
    res.send(update)

  } catch (error) {
    throw error
  }
}

const DeleteMovie = async (req, res) => {
  try{
    let movieId = parseInt(req.params.movie_id)
    const byeMovie = await Movie.destroy(
      {where: {id: movieId}}
    )
    res.send({message: `movie number ${movieId} was removed.`})
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetAllMovies,
  GetMovie,
  CreateMovie,
  UpdateMovie,
  DeleteMovie,
  GetMovieShowtimes
}