const { Movie, Actor, Genre } = require('../models')

const getAllActors = async (req, res) => {
    const actors = await Actor.findAll()
    res.send(actors)
}

const getActorWithMovie = async (req, res) => {
    const actor_id = parseInt(req.params.id)
    const actorInMovie = await Actor.findByPk(actor_id, {
        include: Movie
    })
    res.send(actorInMovie)
}

const addActorToMovie = async (req, res) => {
    const movie_id = parseInt(req.params.movie_id)
    const actorInMovie = {
        movie_id,//: movie_id,
        ...req.body
    }
    const actor = await Actor.create(actorInMovie)
    res.send(actor)
}

const deleteActorById = async (req, res) => {
    try{
        let actor_id = parseInt(req.params.actor_id)
        await Actor.destroy({
            where: {id: actor_id}
        })
        res.send({message: `Deleted movie with an id of ${actor_id}` })
    }catch(error){
        throw error
    }
}

module.exports = {
    getAllActors,
    getActorWithMovie,
    addActorToMovie,
    deleteActorById,
}