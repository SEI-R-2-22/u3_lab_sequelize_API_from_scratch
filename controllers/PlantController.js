const { Plant } = require('../models')

const GetAllPlants = async (req, res) => {
  try {
    const plants = await Plant.findAll()
    res.send(plants)
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetAllPlants
}
