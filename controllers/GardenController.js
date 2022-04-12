const { Garden } = require('../models')

const GetAllGardens = async (req, res) => {
  try {
    const gardens = await Garden.findAll()
    res.send(gardens)
  } catch (error) {
    throw error
  }
}

const CreateGarden = async (req, res) => {
  try {
    let gardenId = parseInt(req.params.garden_id)
    let gardenBody = {
      gardenId,
      ...req.body
    }
    let garden = await Garden.create(gardenBody)
    res.send(garden)
  } catch (error) {
    throw error
  }
}

const UpdateGarden = async (req, res) => {
  try {
    let gardenId = parseInt(req.params.garden_id)
    let updatedGarden = await Garden.update(req.body, {
      where: { id: gardenId },
      returning: true
    })
    res.send(updatedGarden)
  } catch (error) {
    throw error
  }
}

const DeleteGarden = async (req, res) => {
  try {
    let gardenId = parseInt(req.params.garden_id)
    await Garden.destroy({ where: { id: gardenId } })
    res.send({ message: `Deleted Garden ${gardenId}` })
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetAllGardens,
  CreateGarden,
  UpdateGarden,
  DeleteGarden
}
