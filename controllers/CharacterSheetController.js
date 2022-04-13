const { CharacterSheet, ClassList, RaceList } = require('../models')


const createChar = async (req, res) => {

    let char = await CharacterSheet.create(req.body)
    res.send(char)
    

}

const pullChar = async (req, res) => {

    let char = await CharacterSheet.findAll({})
    res.send(char)

}

const createCharClass = async (req, res) => {

    let ownerId = parseInt(req.params.owner_id)
    


    let charClass = {
        ownerId,
        ...req.body
        
    }

    let classCreate = await ClassList.create(charClass)
    res.send(classCreate)
    

}

module.exports = {
    createChar,
    pullChar,
    createCharClass,
}