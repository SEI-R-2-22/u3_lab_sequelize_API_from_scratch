const { Routine } = require('../models')

const GetAllWorkoutRoutines = async (req, res) => {
  try {
    const routines = await Routine.findAll()
    res.send(routines)
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetAllWorkoutRoutines
}
