const { Anime, Episode } = require('../models')

const getAllAnimes = async (req, res) => {
  try {
    const animes = await Anime.findAll()
    res.send(animes)
  } catch (error) {
    throw error
  }
}

const getAnimeById = async (req, res) => {
  try {
    const anime = await Anime.findByPk(req.params.anime_id)
    res.send(anime)
  } catch (error) {
    throw error
  }
}

const createAnime = async (req, res) => {
  try {
    const producerId = parseInt(req.params.producer_id)
    let animeBody = {
      producerId,
      ...req.body
    }
    const anime = await Anime.create(animeBody)
    res.send(anime)
  } catch (error) {
    throw error
  }
}

const updateAnime = async (req, res) => {
  try {
    const animeId = parseInt(req.params.anime_id)
    const updatedAnime = await Anime.update(req.body, {
      where: { id: animeId },
      returning: true
    })
    res.send(updatedAnime)
  } catch (error) {
    throw error
  }
}

const deleteAnime = async (req, res) => {
  try {
    const animeId = parseInt(req.params.anime_id)
    await Anime.destroy({ where: { id: animeId } })
    res.send({ message: `Anime with an id of ${animeId} has been destroyed` })
  } catch (error) {
    throw error
  }
}

module.exports = {
  getAllAnimes,
  getAnimeById,
  createAnime,
  updateAnime,
  deleteAnime
}
