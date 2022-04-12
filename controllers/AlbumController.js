const { Band, Album, Song } = require('../models')
const { Op, literal, fn, col } = require('sequelize')

const GetAllAlbums = async (req,res) => {
    try{
        const albums = await Album.findAll()
        res.send(albums)
    }catch(err){
        throw err
    }
}

const GetOneAlbum = async (req, res) => {
  try {
    const album = await Album.findByPk(req.params.album_id)
    res.send(album)
  } catch (error) {
    throw error
  }
}

const CreateAlbum = async (req, res) => {
  try {
    let bandId = parseInt(req.params.band_id)
    let albumBody = {
      bandId,
      ...req.body
    }
    let album = await Album.create(albumBody)
    res.send(album)
  } catch (error) {
    throw error
  }
}

const UpdateAlbum = async (req, res) => {
  try {
    let albumId = parseInt(req.params.album_id)
    let updatedAlbum = await Album.update(req.body, {
      where: { id: albumId},
      returning: true
    })
    res.send(updatedAlbum)
  } catch (error) {
    throw error
  }
}

const DeleteAlbum = async (req, res) => {
  try {
    let albumId = parseInt(req.params.album_id)
    await Album.destroy({ where: { id: albumId } })
    res.send({ message: `Deleted album with an id of ${albumId}`})
  } catch (error) {
    throw error
  }
}

module.exports = {
    GetAllAlbums,
    GetOneAlbum,
    CreateAlbum,
    UpdateAlbum,
    DeleteAlbum
}
