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
  } catch (error) {
    throw error
  }
}

const CreateBand = async (req, res) => {
  try{
    let bandId = await new Band.create(req.params.band_id)
    let bandBody = {
      ...req.body
    }
    let band = await Band.create(bandBody)
    res.send(band)
  }catch (err){
    throw err
  }
}

module.exports = {
    GetAllBands,
    GetOneBand,
    CreateBand
}
