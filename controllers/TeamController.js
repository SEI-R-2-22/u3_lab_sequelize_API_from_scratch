const { Team } = require('../models')

const GetAllTeams = async (req, res) => {
  try {
    const teams = await Team.findAll()
    res.send(teams)
  } catch (error) {
    throw error
  }
}

const GetTeamById = async (req, res) => {
  try {
    const team = await Team.findByPk(req.params.team_id)
    res.send(team)
  } catch (error) {
    throw error
  }
}

const CreateTeam = async (req, res) => {
  try {
    let teamId = parseInt(req.params.team_id)
    let teamBody = {
      teamId,
      ...req.body
    }
    let team = await Team.create(teamBody)
    res.send(team)
  } catch (error) {
    throw error
  }
}

const UpdateTeam = async (req, res) => {
  try {
    let teamId = parseInt(req.params.team_id)
    let updatedTeam = await Team.update(req.body, {
      where: { id: teamId },
      returning: true
    })
    res.send(updatedTeam)
  } catch (error) {
    throw error
  }
}

const DeleteTeam = async (req, res) => {
  try {
    let teamId = parseInt(req.params.team_id)
    await Team.destroy({ where: { id: teamId } })
    res.send({ message: `Deleted team with id of ${teamId}` })
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetAllTeams,
  GetTeamById,
  CreateTeam,
  UpdateTeam,
  DeleteTeam
}
