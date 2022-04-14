const { Team } = require('../models')

const GetTeam = async (req, res) => {
    try {
        let teamId = parseInt(req.params.team_id)
        const team = await Team.findByPk(teamId)
        res.send(team)
    } catch (error) {
        throw error
    }
}

module.exports = {
    GetTeam
}