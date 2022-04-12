const { Song } = require('../models')

const AddSong = async (req, res) => {
    try {
        let albumId = req.params.id
        let songBody = {
            albumId,
            ...req.body
        }
        let newSong = await Song.create(songBody)
        res.send(newSong)
    } catch (error) {
        throw error
    }
}

module.exports = {
    AddSong
}