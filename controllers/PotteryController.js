const { Pottery } = require('../models')

const GetRecentPosts = async (req, res) => {
  try {
    const recents = await Pottery.findAll({ order: [['created_at', 'DESC']] })
    res.send(recents)
  } catch (error) {
    throw error
  }
}

const CreatePotteryDetails = async (req, res) => {
  try {
    const artistId = parseInt(req.params.artist_id)
    const potteryBody = { artistId, ...req.body }
    const pottery = await Pottery.create(potteryBody)
    res.send(pottery)
  } catch (error) {
    throw error
  }
}

const UpdatePottery = async (req, res) => {
  try {
    const potteryId = parseInt(req.params.pottery_id)
    const updatedPottery = await Pottery.update(req.body, {
      where: { id: potteryId },
      returning: true
    })
    res.send(updatedPottery)
  } catch (error) {
    throw error
  }
}
const DeletePottery = async (req, res) => {
  try {
    const potteryId = parseInt(req.params.pottery_id)
    await Pottery.destroy({ where: { id: potteryId } })
    res.send({ message: `Deleted pottery with an id of ${potteryId}` })
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetRecentPosts,
  CreatePotteryDetails,
  UpdatePottery,
  DeletePottery
}
