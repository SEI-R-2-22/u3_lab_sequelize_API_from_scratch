const res = require('express/lib/response')
const { Driver } = require('../models')

const GetDrivers = async (req, res) => {
    try {
        const drivers = await Driver.findAll()
        res.json(drivers)
    } catch (error) {
        throw error
    }
}

module.exports = {
    GetDrivers
} 