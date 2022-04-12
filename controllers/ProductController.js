const { ShoppingCart, Product } = require('../models')

const GetAllProducts = async (req, res) => {
  try {
    const products = await Product.findAll()

    res.send(products)
  } catch (error) {
    throw error
  }
}
const GetProductByPk = async (req, res) => {
  try {
    const productId = parseInt(req.params.product_id)
    const products = await Product.findByPk({ where: { id: productId } })

    res.send(products)
  } catch (error) {
    throw error
  }
}
const GetAllProductsWithShoppingCart = async (req, res) => {
  try {
    const products = await Product.findAll({
      include: { model: ShoppingCart, as: 'cart' }
    })

    res.send(products)
  } catch (error) {
    throw error
  }
}

const CreateProduct = async (req, res) => {
  try {
    const newProduct = req.body
    const product = await Product.create(newProduct)

    res.send(product)
  } catch (error) {
    throw error
  }
}
const UpdateProduct = async (req, res) => {
  try {
    const productId = parseInt(req.params.product_id)
    const newProduct = req.body
    const product = await Product.update(newProduct, {
      where: { id: productId },
      returning: true
    })

    res.send(product)
  } catch (error) {
    throw error
  }
}
const DeleteProduct = async (req, res) => {
  try {
    const productId = parseInt(req.params.product_id)

    const product = await Product.destroy({
      where: { id: productId },
      returning: true
    })

    res.send({ message: `Product at id ${productId} has been deleted` })
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetAllProducts,
  CreateProduct,
  UpdateProduct,
  DeleteProduct,
  GetProductByPk,
  GetAllProductsWithShoppingCart
}
