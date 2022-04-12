const { Movement } = require('../models')

const GetAllMovements = async (req, res) => {
  try {
    const movements = await Movement.findAll()
    res.send(movements)
  } catch (error) {
    throw error
  }
}

const CreateMovement = async (req, res) => {
  try {
    let routineId = parseInt(req.params.routine_id)
    let movementBody = {
      routineId,
      ...req.body
    }
    let movement = await Movement.create(movementBody)
    res.send(movement)
  } catch (error) {
    throw error
  }
}

const UpdateMovement = async (req, res) => {
  try {
    let movementId = parseInt(req.params.movement_id)
    let updatedMovement = await Movement.update(req.body, {
      where: { id: movementId },
      returning: true
    })
    res.send(updatedMovement)
  } catch (error) {
    throw error
  }
}

const DeleteMovement = async (req, res) => {
  try {
    let movementId = parseInt(req.params.movement_id)
    await Movement.destroy({ where: { id: movementId } })
    res.send({
      message: `Deleted exercise movement with an id of ${movementId}`
    })
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetAllMovements,
  CreateMovement,
  UpdateMovement,
  DeleteMovement
}
