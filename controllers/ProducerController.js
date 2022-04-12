const { Producer, Anime, Episode } = require('../models')

const getAllProducers = async (req, res) => {
  try {
    const producers = await Producer.findAll()
    res.send(producers)
  } catch (error) {
    throw error
  }
}

const getProducerById = async (req, res) => {
  try {
    const producer = await Producer.findByPk(req.params.producer_id)
    res.send(producer)
  } catch (error) {
    throw error
  }
}

const createProducer = async (req, res) => {
  try {
    const newProducer = await Producer.create(req.body)
    res.send(newProducer)
  } catch (error) {
    throw error
  }
}

const updateProducer = async (req, res) => {
  try {
    const producerId = parseInt(req.params.producer_id)
    const updatedProducer = await Producer.update(req.body, {
      where: { id: producerId },
      returning: true
    })
    res.send(updatedProducer)
  } catch (error) {
    throw error
  }
}

const destroyProducer = async (req, res) => {
  try {
    const producerId = parseInt(req.params.producer_id)
    await Producer.destroy({ where: { id: producerId } })
    res.send({
      message: `Producer with an id of ${producerId} has been destroyed`
    })
  } catch (error) {
    throw error
  }
}

module.exports = {
  getAllProducers,
  getProducerById,
  createProducer,
  updateProducer,
  destroyProducer
}
