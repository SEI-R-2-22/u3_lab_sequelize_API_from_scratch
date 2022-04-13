
const { Truck } = require('../models')

const GetTrucks = async (req, res) => {
    try {
        const users = await Truck.findAll()
        res.json(users)
    } catch (error) {
        throw error
    }
}

const GetTruckbyId = async (req,res) => {
    try {
        const truckId = parseInt(req.params.truckId)
        const truck = await Truck.findByPk(truckId)
        res.json(truck)
    } catch (error) {
        throw error
    }
}

module.exports = {
    GetTrucks,
    GetTruckbyId
}