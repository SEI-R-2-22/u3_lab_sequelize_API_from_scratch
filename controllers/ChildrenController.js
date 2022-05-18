const { School, Parents, Children } = require('../models')
const { Op, literal, fn, col } = require('sequelize')

const GetChildrenDetails = async (req, res) => {
  try {
    const children = await Children.findAll(req.body)
    res.send(children)
  } catch (error) {
    throw error
  }
}

const AddChild = async (req, res) => {
  try {
    let schoolId = parseInt(req.params.school_id)
    let childrenBody = {
      schoolId,
      ...req.body
    }
    let children = await Children.create(childrenBody)
    res.send(children)
  } catch (error) {
    throw error
  }
}

const UpdateChildInfo = async (req, res) => {
  try {
    let childrenId = parseInt(req.params.children_id)
    let updatedChild = await Children.update(req.body, {
      where: { id: childrenId },
      returning: true
    })
    res.send(updatedChild)
  } catch (error) {
    throw error
  }
}

const UnenrollChild = async (req, res) => {
  try {
    const childId = parseInt(req.params.children_id)
    await Children.destroy({
      where: { id: children_id }
    })
    res.send({
      message: `This child with id ${children_id} is no longer a student!`
    })
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetChildrenDetails,
  AddChild,
  UpdateChildInfo,
  UnenrollChild
}
