const { User, Reviews, Products } = require('../models')
const { Op, literal, fn, col } = require('sequelize')


const GetAllProducts = async( req, res ) => {
    try{
        const products = await Products.findAll()
        res.send(products)
    } catch (error) {
        throw error
    }
}


const GetProductsDetails = async( req, res ) => {
    try{
        const product = await Products.findByPk(req.params.product_id)
        res.send(product)
    } catch (error) {
        throw error
    }
}

const CreateProduct = async( req, res ) => {
    try{
        let ownerId = parseInt(req.params.user_id)
        let productbody = {
            ownerId, ...req.body
        }
        let newProduct = await Products.create(productbody)
        res.send(newProduct)
    } catch (error) {
        throw error
    }
}

const UpdateProducts = async( req, res ) => {
    try{
        let productId = parseInt(req.params.product_id)
        let updateProduct = await Products.update(req.body, {
            where: { id: productId },
            returning: true
        })
        res.send(updateProduct)
    } catch (error) {
        throw error
    }
}

const DeleteProducts = async( req, res ) => {
    try{
        let productId = parseInt(req.params.product_id)
        await Products.destroy(
        { where: {id: productId}})
        res.send(
            { message: `Delete product with an id of ${productId}`}
        )
    } catch (error) {
        throw error
    }
}


module.exports = {
    GetAllProducts,
    GetProductsDetails,
    CreateProduct,
    UpdateProducts,
    DeleteProducts
}