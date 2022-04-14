const res = require('express/lib/response')
const { CarDealer } = require('../models')

const GetCarDealers = async (req, res) => {
    try {
        const carDealers = await CarDealer.findAll()
        res.json(carDealers)
    } catch (error) {
        throw error
    }
}

const CreateCarDealer = async (req,res) => {
    try {
        const carDealer = await CarDealer.create(req.body)
        res.json(carDealer)
    } catch (error) {
        throw error
    }
}

const UpdateCarDealer = async (req,res) => {
    try {
        const carDealerId = parseInt(req.params.carDealerId)
        let user = await CarDealer.update(req.body,{
            where: {
                id: carDealerId
            },
            returning: true
        })
        res.json(carDealerId)
    } catch (error) {
        throw error
    }
}

const DeleteCarDealer = async (req,res) => {
    try {
        const carDealerId = parseInt(req.params.carDealerId)
        await User.destroy({  where: { id: carDealerId} })
        res.send({message: `Delete car dealer of Id: ${carDealerId}`})
    } catch (error) {
        throw error
    }
}

module.exports = {
    GetCarDealers,
    CreateCarDealer,
    UpdateCarDealer,
    DeleteCarDealer
} 