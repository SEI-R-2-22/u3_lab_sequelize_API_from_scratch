const { Show, Season } = require('../models')

const GetShows = async (req, res) => {
  try {
    const result = await Show.findAll()
    res.send(result)
  } catch (error) {
    throw error
  }
}

const GetShowDetails = async (req, res) => {
  try {
    let result = await Show.findByPk(req.params.show_id)
    res.send(result)
  } catch (error) {
    throw error
  }
}

const CreateShow = async (req, res) => {
  try {
    let showBody = req.body
    let result = await Show.create(showBody)
    res.send(result)
  } catch (error) {
    throw error
  }
}

const UpdateShow = async (req, res) => {
  try {
    let showId = parseInt(req.params.show_id)
    let updatedShow = await Show.update(req.body, {
      where: { id: showId },
      returning: true
    })
    res.send(updatedShow)
  } catch (error) {
    throw error
  }
}

const DeleteShow = async (req, res) => {
  try {
    let showId = parseInt(req.params.show_id)
    await Show.destroy({ where: { id: showId } })
    res.send({ message: `Deleted show with an id of ${showId}` })
  } catch (error) {
    throw error
  }
}

const GetShowSeasons = async (req, res) => {
  try {
    const results = await Show.findByPk(req.params.show_id, {
      include: Season
    })
    res.send(results)
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetShows,
  CreateShow,
  UpdateShow,
  DeleteShow,
  GetShowDetails,
  GetShowSeasons
}
