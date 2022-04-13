const { Show, Season } = require('../models')

const GetSeasons = async (req, res) => {
  try {
    let result = await Season.findAll()
    res.send(result)
  } catch (error) {
    throw error
  }
}

const CreateSeason = async (req, res) => {
  try {
    let showId = parseInt(req.params.show_id)
    let seasonBody = {
      showId,
      ...req.body
    }
    let result = await Season.create(seasonBody)
    res.send(result)
  } catch (error) {
    throw error
  }
}

const UpdatedSeason = async (req, res) => {
  try {
    let showId = parseInt(req.params.show_id)
    let updatedSeason = await Season.update(req.body, {
      where: { id: showId },
      returning: true
    })
    res.send(updatedSeason)
  } catch (error) {
    throw error
  }
}

const DeleteSeason = async (req, res) => {
  try {
    let seasonId = parseInt(req.params.season_id)
    await Season.destroy({ where: { id: seasonId } })
    res.send({ message: `Deleted season with an id of ${seasonId}` })
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetSeasons,
  CreateSeason,
  UpdatedSeason,
  DeleteSeason
}
