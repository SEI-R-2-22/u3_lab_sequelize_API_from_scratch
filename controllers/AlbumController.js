const { Album } = require('../models')

const GetAlbums = async (req, res) => {
    try {
        const albums = await Album.findAll()
        res.send(albums)
    } catch (error) {
        throw error
    }
}

module.exports = { GetAlbums }