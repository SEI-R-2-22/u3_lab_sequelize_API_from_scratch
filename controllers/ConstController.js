const { Constellation } = require('../models')

const GetAllConstellations = async (req, res) => {
  try {
    const constList = await Constellation.findAll()
    res.send(constList)
  } catch (e) {
    throw e
  }
}

const FindConstellation = async (req, res) => {
  try {
    const specificConst = await Constellation.findByPk(
      req.params.constellation_id
    )
    res.send(specificConst)
  } catch (e) {
    throw e
  }
}

const CreateNewConst = async (req, res) => {
  const newConst = await Constellation.create(req.body)
  res.send(newConst)
}

const UpdateConst = async (req, res) => {
  try {
    const constId = parseInt(req.params.constellation_id)
    const revision = await Constellation.update(req.body, {
      where: { id: constId },
      returning: true
    })
    res.send(revision)
  } catch (e) {
    throw e
  }
}

const DeleteConst = async (req, res) => {
  try {
    let constId = parseInt(req.params.constellation_id)
    await Constellation.destroy({
      where: { id: constId }
    })
    res.send({ message: `Deleted Constellation ID: ${constId}` })
  } catch (e) {
    throw e
  }
}

module.exports = {
  GetAllConstellations,
  FindConstellation,
  CreateNewConst,
  UpdateConst,
  DeleteConst
}
