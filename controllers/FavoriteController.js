const { Favorite, User } = require('../models')
const Sequelize = require('sequelize');

const CreateFavorites = async (req, res) => {
  try {
    const userId = req.params.user_id
    const newFavorites = {
      userId,
      favorites: new Array
    }
    const favorites = await Favorite.create(newFavorites)
    res.send(favorites)
  } catch (error) {
    throw error
  }
}

const GetFavorites = async (req, res) => {
  try {
    const posts = await Favorite.findAll()
    res.send(posts)
  } catch (error) {
    throw error
  }
}

const GetUserFavorites = async (req, res) => {
  try {
    const favorites = await Favorite.findOne({
      where: { userId: req.params.user_id }
    })
    res.send(favorites)
  } catch (error) {
    throw error
  }
}

const DeleteFavorites = async (req, res) => {
  try {
    let userId = parseInt(req.params.user_id)
    await Favorite.destroy({ where: { userId: userId } })
    res.send({ message: `deleted with userId of ${userId}` })
  } catch (error) {
    throw error
  }
}

const addFavorite = async (req, res) => {
  try {
    let userId = parseInt(req.params.user_id)
    const newFavorites = await Favorite.findOne({ where: { userId } })
    newFavorites.favorites.push('1')
    const newList = new Array(...newFavorites.favorites)
    const updatedFavorites = await Favorite.update({ 'favorites': Sequelize.fn('array_append', Sequelize.col('favorites'), 1) },
      {
        where: { userId: userId },
        returning: true
      })
    res.send(updatedFavorites)
  } catch (error) {
    throw error
  }
}

module.exports = {
  CreateFavorites,
  DeleteFavorites,
  GetUserFavorites,
  GetFavorites,
  addFavorite
}