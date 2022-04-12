const { Movie, Actor, Genre } = require('../models')

const getGenreWithMovie = async (req, res) => {
    try{
        const genre = await Genre.findAll({
            include: {model: Movie}
        })
        res.send(genre)
    }catch(error){
        throw error
    }
}

module.exports = {
    getGenreWithMovie
}