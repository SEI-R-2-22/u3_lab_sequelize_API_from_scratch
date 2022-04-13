const { Puppy } = require('../models')

const GetPuppies = async (req, res) => {
  try {
    const puppies = await Puppy.findAll()
    res.send(puppies)
  } catch (error) {
    throw error
  }
}

const GetPuppyProfile = async (req, res) => {
    try {
      const puppyDeets = await Puppy.findByPk(req.params.puppies_id)
      res.send(puppyDeets)
    } catch (error) {
      throw error
    }
  }

  const CreatePuppy = async (req, res) => {
    try {
      let userId = parseInt(req.params.user_id);
      let homeId = parseInt(req.params.home_id);
      let newPuppy = {
        userId,
        homeId,
        ...req.body,
      };
      let comment = await Puppy.create(newPuppy);
      res.send(comment);
    } catch (error) {
      throw error;
    }
  };

  const UpdatePuppy = async (req, res) => {
    try {
      let puppyId = parseInt(req.params.puppies_id);
      let updatedPuppy = await Puppy.update(req.body, {
        where: { id: puppyId },
        returning: true,
      });
      res.send(updatedPuppy);
    } catch (error) {
      throw error;
    }
  };

  const SendToFarm = async (req, res) => {
    try {
      let puppyId = parseInt(req.params.puppies_id);
      await Puppy.destroy({
        where: { id: puppyId },
      });
  res.send({ message: `Puppy with id of ${puppyId} is gone, but not forgotten.` });
    } catch (error) {
      throw error;
    }
  };



  module.exports = {
    GetPuppies,
    GetPuppyProfile,
    CreatePuppy,
    UpdatePuppy,
    SendToFarm
}