const { Team } = require('../models')

const GetTeams = async (req, res) => {
  try {
    const teams = await Team.findAll()
    res.send(teams)
  } catch (error) {
    throw error
  }
}

const CreateTeam = async (req, res) => {
  try {
    let team = await Team.create(req.body)
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
    res.send({ message: `Deleted team with an id of ${teamId}` })
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetTeams,
  CreateTeam,
  UpdateTeam,
  DeleteTeam
}
