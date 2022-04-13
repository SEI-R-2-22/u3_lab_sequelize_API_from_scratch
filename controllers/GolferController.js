const { Tournament, Golfer, Golfball } = require('../models')
const { Op, literal, fn, col } = require('sequelize')
const { response } = require('express')
const golfer = require('../models/golfer')

const GetGolferById = async (req, res) => {
  try {
    const golfer = await Golfer.findByPk(req.params.golfer_id)
    res.send(golfer)
  } catch (error) {
    throw error
  }
}

const CreateGolfer = async (req, res) => {
  try {
    const tournamentId = parseInt(req.params.tournament_id)
    let golferBody = {
      tournamentId,
      ...req.body
    }
    let golfer = await Golfer.create(golferBody)
    res.send(golfer)
  } catch (error) {
    throw error
  }
}

const DeleteGolfer = async (req, res) => {
  try {
    const golferId = parseInt(req.params.golfer_id)
    await Golfer.destroy({ where: { id: golferId } })
    res.send({ message: `Deleted golfer with the id of ${golferId}` })
  } catch (error) {
    throw error
  }
}

const UpdateRanking = async (req, res) => {
  try {
    console.log(req.params.golfer_id)
    const golferId = parseInt(req.params.golfer_id)
    await Golfer.update(req.body, {
      where: { id: golferId },
      returning: true
    })
    res.send({ message: 'You updated it!' })
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetGolferById,
  CreateGolfer,
  DeleteGolfer,
  UpdateRanking
}
