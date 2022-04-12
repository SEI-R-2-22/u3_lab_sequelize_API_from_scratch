const { Season } = require('../models')

const GetAllSeasons = async (req, res) => {
  try {
    const seasons = await Season.findAll()
    res.send(seasons)
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetAllSeasons
}
