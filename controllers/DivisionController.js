const { Conference, Division, Team } = require('../models') 

const GetDivisions = async (req, res) => {
    try {
    const divisions = await Team.findAll()
    res.send(divisions)
    } catch (error) {
    throw error
    }
}

module.exports = {
    GetDivisions,
    
}