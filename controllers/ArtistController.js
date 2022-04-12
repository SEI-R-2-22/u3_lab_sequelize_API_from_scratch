const { Artist } = require('../models')

const GetArtists = async (req, res) => {
  try {
    const artists = await Artist.findAll()
    res.send(artists)
  } catch (error) {
    throw error
  }
}

const GetArtistDetails = async (req, res) => {
  try {
    const artistDetails = await Artist.findByPk(req.params.artist_id, {
      include: [{ model: Album, as: 'albums' }]
    })
    res.send(albumDetails)
  } catch (error) {
    throw error
  }
}
module.exports = {
  GetArtists,
  GetArtistDetails
}
