const { Bike } = require('../models')

const GetAllBikes = async (req, res) => {
  try {
    const bikes = await Bike.findAll()
    res.send(bikes)
  } catch (error) {
    throw error
    
  }
}

const CreateBike = async (req, res) => {
  try {
    let inventoryId = parseInt(req.params.inventory_id)
    let bikeBody = {
      inventoryId,
      ...req.body
    }
    let bike = await Bike.create(bikeBody)
    res.send(bike)
  } catch (error) {
    throw error
  }
}

const UpdateBike = async (req, res) => {
  try {
    let bikeId = parseInt(req.params.bike_id)
    let updatedBike = await Bike.update(req.body, { where: { id: bikeId }, returning: true })
    res.send(updatedBike)
  } catch (error) {
    throw error
    
  }
}

const DeleteBike = async (req, res) => {
  try {
    let bikeId = parseInt(req.params.bike_id)
    await Bike.destroy({ where: { id: bikeId }})
    res.send({ message: `Deleted Bike with id of ${bikeId}`})
  } catch (error) {
    throw error
  }
}


module.exports = {
  GetAllBikes,
  CreateBike,
  UpdateBike,
  DeleteBike
}