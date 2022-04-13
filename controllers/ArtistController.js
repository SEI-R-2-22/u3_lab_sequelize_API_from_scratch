const { Artist, Pottery } = require('../models')

const GetArtists = async (req, res) => {
  try {
    const artists = await Artist.findAll()
    res.send(artists)
  } catch (error) {
    throw error
  }
}

const GetArtistGallery = async (req, res) => {
  try {
    const artistsPots = await Artist.findByPk(req.params.artist_id, {
      include: [{ model: Pottery, as: 'pottery' }]
    })
    res.send(artistsPots)
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetArtists,
  GetArtistGallery
}
