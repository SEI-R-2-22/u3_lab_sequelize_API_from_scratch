const { Employee } = require('../models')

const CreateEmployee = async (req, res) => {
  try {
    let restaurantId = parseInt(req.params.restaurant_id)
    let employeeBody = {
      restaurantId,
      ...req.body
    }
    let employee = await Employee.create(employeeBody)
    res.send(employee)
  } catch (error) {
    throw error
  }
}

module.exports = {
  CreateEmployee
}
