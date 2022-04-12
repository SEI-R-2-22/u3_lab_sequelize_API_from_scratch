const { Album } = require('../models')

const GetAllAlbums = async (req, res) => {
  try {
    const albums = await Album.findAll()
    res.send(albums)
  } catch (error) {
    throw error
  }
}
const GetAlbum = async (req, res) => {
  try {
    const album = await Album.findByPk(req.params.album_id)
    res.send(album)
  } catch (error) {
    throw error
  }
}

const CreateAlbum = async (req, res) => {
  try {
    const artistId = parseInt(req.params.artist_id)
    const newAlbum = {
      artistId,
      ...req.body
    }
    let album = await Album.create(newAlbum)
    res.send(album)
  } catch (error) {
    throw error
  }
}

const UpdateAlbum = async (req, res) => {
  try {
    let albumId = parseInt(req.params.album_id)
    let updatedAlbum = await Album.update(req.body, {
      where: { id: albumId },
      returning: true
    })
    res.send(updatedAlbum)
  } catch (error) {
    throw error
  }
}
const DestroyAlbum = async (req, res) => {
  try {
    let albumId = parseInt(req.params.album_id)
    await Album.destroy({ where: { id: albumId } })
    res.send({ message: `ALBUM WITH ID OF ${albumId} HAS BEEN DESTROYED` })
  } catch (error) {}
}
module.exports = {
  GetAlbum,
  GetAllAlbums,
  CreateAlbum,
  DestroyAlbum,
  UpdateAlbum
}
