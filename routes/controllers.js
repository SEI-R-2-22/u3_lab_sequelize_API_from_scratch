const { User, HouseHold, Puppy } = require('../models')

const GetPuppyDetails = async (req, res) => {
    try {
      const puppy = await Puppy.findByPk(req.params.puppies_id)
      res.send(puppy)
    } catch (error) {
      throw error
    }
  }
  
  const CreatePuppy = async (req, res) => {
    try {
      let ownerId = parseInt(req.params.user_id)
      let puppyBody = {
        ownerId,
        ...req.body
      }
      let puppy = await Puppy.create(puppyBody)
      res.send(puppy)
    } catch (error) {
      throw error
    }
  }
  
  const UpdatePuppy = async (req, res) => {
    try {
      let puppyId = parseInt(req.params.puppies_id)
      let updatedPuppy = await Puppy.update(req.body, {
        where: { id: puppyId},
        returning: true
      })
      res.send(updatedPuppy)
    } catch (error) {
      throw error
    }
  }
  
  const DeletePuppy = async (req, res) => {
    try {
      let puppyId = parseInt(req.params.puppy_id)
      await Puppy.destroy({where: { id:puppyId}})
      res.send({ message: `Puppy ${puppyId} went to the farm`})
    } catch (error) {
      throw error
    }
  }

  module.exports = {
    GetPuppyDetails,
    CreatePuppy,
    UpdatePuppy,
    DeletePuppy
  }