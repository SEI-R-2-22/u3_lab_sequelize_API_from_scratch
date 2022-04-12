const { Episode } = require('../models')
const { updateAnime } = require('./AnimeController')

const getAllEpisodesByAnime = async (req, res) => {
  try {
    const animeId = parseInt(req.params.anime_id)
    const episodes = await Episode.findAll({ where: { animeId: animeId } })
    res.send(episodes)
  } catch (error) {
    throw error
  }
}

const getEpisodeById = async (req, res) => {
  try {
    const episode = await Episode.findByPk(req.params.episode_id)
    res.send(episode)
  } catch (error) {
    throw error
  }
}

const createEpisode = async (req, res) => {
  try {
    const animeId = parseInt(req.params.anime_id)
    const episodeBody = {
      animeId,
      ...req.body
    }
    const episode = await Episode.create(episodeBody)
    res.send(episode)
  } catch (error) {
    throw error
  }
}

const updateEpisode = async (req, res) => {
  try {
    const episodeId = parseInt(req.params.episode_id)
    const updatedEpisode = await Episode.update(req.body, {
      where: { id: episodeId },
      returning: true
    })
    res.send(updatedEpisode)
  } catch (error) {
    throw error
  }
}

const destroyEpisode = async (req, res) => {
  try {
    const episodeId = parseInt(req.params.episode_id)
    await Episode.destroy({ where: { id: episodeId } })
    res.send({
      message: `Episode with an id of ${episodeId} has been destroyed`
    })
  } catch (error) {
    throw error
  }
}

module.exports = {
  getAllEpisodesByAnime,
  getEpisodeById,
  createEpisode,
  updateEpisode,
  destroyEpisode
}
