const { Band } = require('../models')

const GetAllBands = async (req, res) => {
  try {
    const bands = await Band.findAll()
    res.send(bands)
  } catch (error) {
    throw error
  }
}

const GetOneBand = async (req, res) => {
  try {
    let band = await Band.findByPk(req.params.band_id)
    res.send(band)
  } catch (error) {
    throw error
  }
}


module.exports = {
    GetAllBands,
    GetOneBand
}
