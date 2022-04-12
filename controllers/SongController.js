const { Artist, Album, Song } = require('../models')

const GetAllSongs = async (req,res) => {
    try {
        const songs = await Song.findAll()
        res.send(songs)

    } catch (error) {
        throw error
    }
}

const CreateSong = async (req,res) => {
    try {
        let artistId = parseInt(req.params.artist_id)
        let albumId = parseInt(req.params.album_id)
        let songBody = {
            artistId,
            albumId,
            ...req.body
        }
    
        let song = await Song.create(songBody)
        res.send(song)

    } catch (error) {
        throw error
    }
}
const UpdateSong = async (req,res) => {
    try {
        let songId = parseInt(req.params.song_id)
        let updatedSong = Song.update(req.body, 
            {where: 
                { id: songId}, 
                returning: true
            })

        res.send(updatedSong)

    } catch (error) {
        throw error
    }
}
const DeleteSong = async (req,res) => {
    try {
        let songId = parseInt(req.params.song_id)

        await Song.destroy({ where: { id: songId}})

        res.send({message: `Song deleted with id: ${songId}`})

    } catch (error) {
        throw error
    }
}


module.exports = {
    GetAllSongs,
    CreateSong,
    UpdateSong,
    DeleteSong

}