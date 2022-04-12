const { Star } = require('../models')

const GetAllStars = async (req, res) => {
  try {
    const stars = await Star.findAll()
    res.send(stars)
  } catch (e) {
    throw e
  }
}

const FindStar = async (req, res) => {
  try {
    const specificStar = await Star.findByPk(req.params.star_id)
    res.send(specificStar)
  } catch (e) {
    throw e
  }
}

const CreateStar = async (req, res) => {
  try {
    const constellationId = parseInt(req.params.constellation_id)
    const starBody = {
      constellationId,
      ...req.body
    }
    const newStar = await Star.create(starBody)
    res.send(newStar)
  } catch (error) {}
}

const UpdateStar = async (req, res) => {
  try {
    const starId = parseInt(req.params.star_id)
    const update = await Star.update(req.body, {
      where: { id: starId },
      returning: true
    })
    res.send(update)
  } catch (e) {
    throw e
  }
}

const DeleteStar = async (req, res) => {
  try {
    const starId = parseInt(req.params.star_id)
    await Star.destroy({
      where: { id: starId }
    })
    res.send({ message: `Star ID: ${starId} has died and is now a supernova!` })
  } catch (e) {
    throw e
  }
}

module.exports = {
  GetAllStars,
  FindStar,
  CreateStar,
  UpdateStar,
  DeleteStar
}
