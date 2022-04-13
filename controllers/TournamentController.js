const { Tournament, Golfer, Golfball } = require('../models')
const { Op, literal, fn, col } = require('sequelize')
const { response } = require('express')

const GetAllTournaments = async (req, res) => {
  try {
    const tournaments = await Tournament.findAll()
    res.send(tournaments)
  } catch (error) {
    throw error
  }
}

const CreateTournament = async (req, res) => {
  try {
    const tournamentBody = req.body
    let tournament = await Tournament.create(tournamentBody)
    res.send(tournament)
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetAllTournaments,
  CreateTournament
}
