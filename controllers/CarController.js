const { Car } = require('../models')

const GetAllCars = async (req, res) => {
  try {
    const cars = await Car.findAll()
    res.send(cars)
  } catch (error) {
    throw error
  }
}

const CreateCar = async (req, res) => {
  try {
    let inventoryId = parseInt(req.params.inventory_id)
    let carBody = {
      inventoryId,
      ...req.body
    }
    let car = await Car.create(carBody)
    res.send(car)
  } catch (error) {
    
  }
}

const UpdateCar = async (req, res) => {
  try {
    let carId = parseInt(req.params.car_id)
    let updatedCar = await Car.update(req.body, { where: { id: carId }, returning: true })
    res.send(updatedCar)
  } catch (error) {
    throw error
  }
}
const DeleteCar = async (req, res) => {
  try {
    let carId = parseInt(req.params.car_id)
    await Car.destroy({ where: { id: carId }})
    res.send({ message: `Deleted car with the id of ${carId}`})
  } catch (error) {
    throw error
    
  }
}


module.exports = {
  GetAllCars,
  CreateCar,
  UpdateCar,
  DeleteCar
}