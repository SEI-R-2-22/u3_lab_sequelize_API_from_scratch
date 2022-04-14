const { Player } = require('../models')

const GetPlayers = async (req, res) => {
    try {
        const players = await Player.findAll()
        res.send(players)
    } catch (error) {
        throw error
    }
}

const GetPlayer = async (req, res) => {
    try {
        let playerId = parseInt(req.params.player_id)
        const player = await Player.findByPk(playerId)
        res.send(player)  
    } catch (error) {
        throw error
    }
}

const CreatePlayer = async (req, res) => {
    try {
        let team_id = parseInt(req.params.team_id)
        let playerBody = {
            team_id,
            ...req.body
        }
        const player = await Player.create(playerBody)
        res.send(player)
    } catch (error) {
        throw error
    }
}

const UpdatePlayer = async (req, res) => {
    try {
        let player_id = parseInt(req.params.player_id)
        let updatedPlayer = await Player.update(
            req.body, {
                where: { id: player_id },
                returning: true
            }
        )
        res.send(updatedPlayer)
    } catch (error) {
        throw error
    }
}

const DeletePlayer = async (req, res) => {
    try {
        let player_id = parseInt(req.params.player_id)
        await Player.destroy({
            where: {id: player_id}
        })
        res.send({message: `deleted a player with an id of ${player_id}`})
    } catch (error) {
        throw error
    }
}

module.exports = {
    GetPlayers,
    GetPlayer,
    CreatePlayer,
    UpdatePlayer,
    DeletePlayer
}