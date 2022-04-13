const { Showtime, Movie, Screen } = require('../models')

// Work Here
// Work Here
const GetAllShowtimes = async (req, res) => {
  try  {
    const show = await Showtime.findAll();
    res.send(show)
  } catch (error) {
    throw error
  }
}
const GetShowtime = async (req, res) => {
  try  {
    let stId = req.params.showtime_id;
    const show = await Showtime.findByPk(stId);
    res.send(show)
  } catch (error) {
    throw error
  }
}
const GetShowtimesByMovie = async (req, res) => {
  try  {
    let movieId = req.params.movie_id;
    const times = await Showtime.findAll(
      {
        attributes: ['id','screenId','date','time','price','soldout'],
        where: {movieId: movieId},
        include: [{
          model: Movie, 
          attributes: ['title']
        }],
        order: [['date'],['time']]
      });
    res.send(times)
  } catch (error) {
    throw error
  }
}
const GetShowtimesByScreen = async (req, res) => {
  try  {
    let screenId = req.params.screen_id;
    const times = await Showtime.findAll(
      {
        attributes: ['id','movieId','date','time','price','soldout'],
        where: {screenId: screenId},
        include: [
          {model: Screen},
          {model: Movie, attributes: ['title'] }
        ],
        order: [['date'],['time']]
      });
    res.send(times)
  } catch (error) {
    throw error
  }
}
// con?

const CreateShowtime = async (req, res) => {
  try{
    const newTime = await Showtime.create(
      {...req.body}
    )
      res.send(newTime)
    
  } catch (error) {
    throw error
  }
}

const UpdateShowtime = async (req, res) => {
  try{
    let showtimeId = parseInt(req.params.showtime_id);
    const update = await Showtime.update(
      req.body,
      {
        where: {id: showtimeId},
        returning: true
      }
    )
    res.send(update)

  } catch (error) {
    throw error
  }
}

const DeleteShowtime = async (req, res) => {
  try{
    let showtimeId = parseInt(req.params.showtime_id)
    const byeshowtime = await Showtime.destroy(
      {where: {id: showtimeId}}
    )
    res.send({message: `movie number ${showtimeId} was removed.`})
  } catch (error) {
    throw error
  }
}


// Dont forget to export your functions

module.exports = {
  GetAllShowtimes,
  GetShowtime,
  GetShowtimesByMovie,  
  GetShowtimesByScreen,  
  CreateShowtime,
  UpdateShowtime,
  DeleteShowtime
}
