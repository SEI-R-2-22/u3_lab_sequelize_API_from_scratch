const { Player } = require('../models')

const GetPlayers = async (req, res) => {
  try {
    let teamId = parseInt(req.params.team_id)
    const players = await Player.findAll({ where: { teamId: teamId } })
    res.send(players)
  } catch (error) {
    throw error
  }
}

const CreatePlayer = async (req, res) => {
  try {
    let teamId = parseInt(req.params.team_id)
    let playerBody = {
      teamId,
      ...req.body
    }
    let player = await Player.create(playerBody)
    res.send(player)
  } catch (error) {
    throw error
  }
}

const UpdatePlayer = async (req, res) => {
  try {
    let playerId = parseInt(req.params.player_id)
    let updatedPlayer = await Player.update(req.body, {
      where: { id: playerId },
      returning: true
    })
    res.send(updatedPlayer)
  } catch (error) {
    throw error
  }
}

const DeletePlayer = async (req, res) => {
  try {
    let playerId = parseInt(req.params.player_id)
    await Player.destroy({ where: { id: playerId } })
    res.send({ message: `Deleted player with an id of ${playerId}` })
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetPlayers,
  CreatePlayer,
  UpdatePlayer,
  DeletePlayer
}
