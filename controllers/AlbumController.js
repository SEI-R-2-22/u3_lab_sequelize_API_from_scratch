const { Album } = require('../models')

const CreateAlbum = async (req, res) => {
    try {
        let albumBody = {
            ...req.body
        }
        let newAlbum = await Album.create(albumBody)
        res.send(newAlbum)
    } catch (error) {
        throw error
    }
}

const GetAlbums = async (req, res) => {
    try{ 
        const albums = await Album.findAll()
        res.send(albums)
    } catch (error) {
        throw error
      }
}

const UpdateAlbum = async (req, res) => {
    try {
        let albumId = req.params.id
        const thisAlbum = await Album.update(req.body, {
            where: { id: albumId },
            returning: true
        })
        res.send(thisAlbum)
    }   catch (error) {
        throw error
      }
}

const DeleteAlbum = async (req, res) => {
    try {
        let albumId = req.params.id
        await Album.destroy( {
            where: { id: albumId }
        })
        res.send( { message: `Deleted Album with id of ${albumId}`})
    } catch (error) {
        throw error
      }
}

module.exports = {
    CreateAlbum,
    GetAlbums,
    UpdateAlbum,
    DeleteAlbum
}