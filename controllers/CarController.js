const res = require('express/lib/response')
const { Car } = require('../models')

const GetCars = async (req, res) => {
    try {
        const cars = await Car.findAll()
        res.json(cars)
    } catch (error) {
        throw error
    }
}

module.exports = {
    GetCars
} 