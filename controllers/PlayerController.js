const { Player, Game } = require('../models')

const getPlayers = async (req, res) => {
    try {
        const players = await Player.findAll()
        res.send(players)
    } catch (error) {
        throw error
    }
}

module.exports = {
    getPlayers
}