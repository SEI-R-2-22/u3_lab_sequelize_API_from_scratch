const { Crew } = require('../models')

const GetCrew = async (req, res) => {
    try {
        const crew = await Crew.findAll()
        res.send(crew)
    } catch (error) {
        throw error
    }
}


const GetCrewDetails = async (req, res) => {
  try {
    const crew = await Crew.findByPk(req.params.movie_id)
    res.send(crew)
  } catch (error) {
    throw error
  }
}

module.exports = {
    GetCrewDetails,
    GetCrew
}
