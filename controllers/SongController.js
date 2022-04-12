const { Band, Album, Song } = require('../models')
const { Op, literal, fn, col } = require('sequelize')

const GetSongs = async (req,res) => {
    try{
        const songs = await Song.findAll()
        res.send(songs)
    }catch(err){
        throw err
    }
}

const GetSongsById = async (req,res) => {
    try{
        const song = await Song.findByPk(req.params.song_id)
        res.send(song)
    }catch(err){
        throw err
    }
}

const DeleteSong = async (req,res) => {
    try{
        let songId = parseInt(req.params.song_id)
        await Song.destroy({ where: { id: songId } })
        res.send({ message: `Deleted song with an id of ${songId}`})
    }catch(err){
        throw err
    }
}

module.exports = {
    GetSongs,
    GetSongsById,
    DeleteSong
}