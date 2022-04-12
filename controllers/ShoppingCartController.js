const { User, ShoppingCart, Product } = require('../models')

const GetAllCart = async (req, res) => {
  try {
    const carts = await ShoppingCart.findAll()

    res.send(carts)
  } catch (error) {
    throw error
  }
}
const GetCartByPk = async (req, res) => {
  try {
    const cartId = parseInt(req.params.cart_id)
    const carts = await ShoppingCart.findByPk(cartId)

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
const CreateCart = async (req, res) => {
  try {
    const newCart = req.body
    const cart = await ShoppingCart.create(newCart)

    res.send(cart)
  } catch (error) {
    throw error
  }
}
const UpdateCart = async (req, res) => {
  try {
    const cartId = parseInt(req.params.cart_id)
    const newCart = req.body
    const cart = await ShoppingCart.update(newCart, {
      where: { id: cartId },
      returning: true
    })

    res.send(cart)
  } catch (error) {
    throw error
  }
}
const DeleteCart = async (req, res) => {
  try {
    const cartId = parseInt(req.params.cart_id)
    const cart = await ShoppingCart.destroy({ where: { id: cartId } })

    res.send({ message: `cart at ID ${cartId} has been deleted` })
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetAllCart,
  GetAllCartWIthUser,
  GetAllCartWIthUserProducts,
  CreateCart,
  UpdateCart,
  DeleteCart,
  GetCartByPk
}
