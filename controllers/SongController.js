const {  Song } = require('../models')
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


module.exports = {
    GetSongs,
    GetSongsById
}