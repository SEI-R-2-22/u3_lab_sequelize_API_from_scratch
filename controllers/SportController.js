const { Sport } = require('../models')

const GetSports = async (req, res) => {
    try {
        const sports = await Sport.findAll()
        res.send(sports)
    } catch (error) {
        throw error
    }
}

module.exports = {
    GetSports
}