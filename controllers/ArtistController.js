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
    let artistId = req.params.artist_id
    const artistDetails = await Artist.findByPk(artistId, {
      include: [{ model: Album, as: 'albums' }]
    })
    res.send(albumDetails)
  } catch (error) {
    throw error
  }
}

const CreateArtist = async (req, res) => {
  try {
    const newArtist = {
      ...req.body
    }
    let artist = await Artist.create(newArtist)
    res.send(artist)
  } catch (error) {
    throw error
  }
}

const UpdateArtist = async (req, res) => {
  try {
    let artistId = parseInt(req.params.artist_id)
    let updatedArtist = await Artist.update(req.body, {
      where: { id: artistId },
      returning: true
    })
    res.send(updatedArtist)
  } catch (error) {
    throw error
  }
}

const DestroyArtist = async (req, res) => {
  try {
    let artistId = parseInt(req.params.artist_id)
    await Artist.destroy({ where: { id: artistId } })
    res.send({ message: `ARTIST WITH ID OF ${artistId} HAS BEEN DESTROYED!!` })
  } catch (error) {
    throw error
  }
}
module.exports = {
  GetArtists,
  GetArtistDetails,
  CreateArtist,
  UpdateArtist,
  DestroyArtist
}
