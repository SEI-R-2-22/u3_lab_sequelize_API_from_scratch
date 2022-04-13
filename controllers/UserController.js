const res = require('express/lib/response')
const { User } = require('../models')

const GetUsers = async (req, res) => {
    try {
        const users = await User.findAll()
        res.json(users)
    } catch (error) {
        throw error
    }
}

const GerUserbyId = async (req,res) => {
    try {
        const userId = parseInt(req.params.userId)
        const user = await User.findByPk(userId)
        res.json(user)
    } catch (error) {
        throw error
    }
}

const CreateUser = async (req,res) => {
    try {
        const user = await User.create(req.body)
        res.json(user)
    } catch (error) {
        throw error
    }
}

const UpdateUser = async (req,res) => {
    try {
        const userId = parseInt(req.params.userId)
        let user = await User.update(req.body,{
            where: {
                id: userId
            },
            returning: true
        })
        res.json(user)
    } catch (error) {
        throw error
    }
}

const DeleteUser = async (req,res) => {
    try {
        const userId = parseInt(req.params.userId)
        await User.destroy({  where: { id: userId} })
        res.send({message: `Delete user of Id: ${userId}`})
    } catch (error) {
        throw error
    }
}

module.exports = {
    GetUsers,
    GerUserbyId,
    CreateUser,
    UpdateUser,
    DeleteUser
}