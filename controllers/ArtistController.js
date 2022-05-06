const { Artist, Album } = require('../models')

const GetArtists = async (req, res) => {
    try {
        const artists = await Artist.findAll()
        res.send(artists)
    } catch (error) {
        throw error
    }
}

const GetArtistById = async (req, res) => {
    try {
        const artistAndAlbums = Artist.findByPk(req.params.artist_id, {
            include: [{ model: Album, as: 'albums'}]
        })
        res.send(artistAndAlbums)
    } catch (error) {
        throw error
    }
}

module.exports = {
    GetArtists,
    GetArtistById
}