const {Sport, Athlete} = require('../models')

// http://localhost:3001/api/sports/
const GetAllSports = async (req, res) => {
    try {
        const sports = await Sport.findAll()
        res.send(sports)
    } catch (error) {
        throw error 
    }


}

// /http://localhost:3001/api/sports/_89
const CreateSport = async (req, res) => {
    try {
        let athleteId = parseInt(req.params.athlete_Id)
        let sportBody = {
            athleteId,
            ...req.body
        }
        let sport = await Sport.create(sportBody)
        res.send(sport)
    } catch (error) {
        throw error  
    }


}
//http://localhost:3001/api/sports/_22
const UpdateSport = async (req, res) => {
    try {
     let sportId = parseInt(req.params._id)
     let updateSport = await Sport.update(req.body, {
         where: {id: sportId},
         returning: true
     })   
     res.send(updateSport)
    } catch (error) {
        throw error 
    }


}
// http://localhost:3001/api/sports/2
const DeleteSport = async (req, res) => {
    try {
    let sportId = parseInt(req.params._id)
    await Sport.destroy({where: { id: sportId} })
    res.send({ message: `${sportId} is deleted`})
    } catch (error) {
        throw error 
    }


}

module.exports = {
    GetAllSports,
    CreateSport,
    UpdateSport,
    DeleteSport
}