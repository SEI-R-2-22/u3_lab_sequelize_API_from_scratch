const { Artist } = require('../models')

const CreateArtist = async (req, res) => {
    try {
        let artistBody = {
            ...req.body
        }
        let newArtist = await Artist.create(artistBody)
        res.send(newArtist)
    } catch (error) {
        throw error
    }
}

module.exports = {
    CreateArtist
}