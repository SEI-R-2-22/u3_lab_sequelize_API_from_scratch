const { Album } = require('../models')

const GetAlbum = async (req, res) => {
  try {
    const album = await Album.findByPk(req.params.album_id)
    res.send(album)
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetAlbum
}
