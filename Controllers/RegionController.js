const { Region } = require('../models')

const GetAllRegions = async (req, res) => {
  try {
    const regions = await Region.findAll()
    res.send(regions)
  } catch (error) {
    throw error
  }
}

module.exports = { GetAllRegions }
