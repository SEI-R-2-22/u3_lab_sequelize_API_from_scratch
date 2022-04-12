const { User, ShoppingCart, Product } = require('../models')

const GetAllCart = async (req, res) => {
  try {
    const carts = await ShoppingCart.findAll()

    res.send(carts)
  } catch (error) {
    throw error
  }
}
const GetAllCartWIthUser = async (req, res) => {
  try {
    const carts = await ShoppingCart.findAll({
      include: [{ model: User, as: 'owner' }]
    })

    res.send(carts)
  } catch (error) {
    throw error
  }
}
const GetAllCartWIthUserProducts = async (req, res) => {
  try {
    const carts = await ShoppingCart.findAll({
      include: [{ model: Product }, { model: User, as: 'owner' }]
    })

    res.send(carts)
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetAllCart,
  GetAllCartWIthUser,
  GetAllCartWIthUserProducts
}
