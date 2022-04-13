const { Actor } = require('../models')

const GetActorDetails = async (req, res) => {
  try {
    const actors = await Actor.findByPk(req.params.movie_id)
    res.send(actors)
  } catch (error) {
    throw error
  }
}

module.exports = {
    GetActorDetails
}
