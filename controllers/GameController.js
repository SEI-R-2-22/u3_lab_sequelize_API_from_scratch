const Router = require('express').Router()
const { Game, Player } = require('../models')

const GetGames = async (req, res) => {
    try {
      const games = await Game.findAll()
      res.send(games)
    } catch (error) {
      throw error
    }
  }

  const GetGameDetails = async (req, res) => {
    try {
      const details = await Game.findByPk(req.params.gameId)
      res.send(details)  
    } catch (error) {
      throw error
    }
  }

  const PostGame = async (req, res) => {
    try {
       let playerId = parseInt(req.params.playerId)  
       let gameBody = {
          playerId,               
         ...req.body           //key value saved in spread object
       }
       let game = await Game.create(gameBody)
       res.send(game)
    } catch (error) {
      throw error
    }
  }

  const UpdateGame = async (req, res) => {
    try {
      let gameId = parseInt(req.params.gameId)
      let updatedGame = await Game.update(req.body, {
        where: { id: gameId }, 
        returning: true
      })
      res.send(updatedGame)
    } catch (error) {
      throw error
    }
  }
  
  const DeleteGame = async (req, res) => {
    try {
      let gameId = parseInt(req.params.gameId)
      await Game.destroy({ where: { id: gameId }})
      res.send({ message: 'Your game was deleted'})
    } catch (error) {
      throw error
    }
  }


  module.exports = {
      GetGames,
      GetGameDetails,
      PostGame,
      UpdateGame,
      DeleteGame
  }