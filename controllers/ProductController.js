const { Product, User } = require('../models')

const GetAllProducts = async (req, res) => {
    try {
        const products = await Product.findAll({
            include: [
                { model: User, as: 'owner', attributes: ['username'] },
            ]
        })
        res.send(products)
    } catch (error) {
        throw error
    }
}

const GetProductsByCategory = async (req, res) => {
    try{
        let categoryId = parseInt(req.params.category_id)
        const products = await Product.findAll({
            where: {category_id: categoryId},
            include: [
                { model: User, as: 'owner', attributes: ['username'] },
            ]
        })
        res.send(products)
    } catch (error) {
        throw error
    }
}

const CreateProduct = async (req, res) => {
    try{
        let userId = parseInt(req.params.user_id)
        let categoryId = parseInt(req.params.category_id)
        console.log(userId, categoryId)
        let productBody = {
            categoryId: categoryId,
            ownerId: userId,
            ... req.body
        }
        let created = await Product.create(productBody)
        res.send(created)

    } catch (error) {
        throw error
    }
}

const UpdateProduct = async (req, res) => {
    try{
        let productId = parseInt(req.params.product_id)
        let updatedProduct = await Product.update(req.body, {
            where: { id: productId },
            returning: true
        })
        res.send(updatedProduct)
    } catch (error) {
        throw error
    }
}

const DeleteProduct = async (req, res) => {
    try{
        let productId = parseInt(req.params.product_id)
        let deletedProduct = await Product.destroy({where: {id:productId}})
        res.send({message: `Deleted product with an id of ${productId}`})
    } catch(error) {
        throw error
    }
}

module.exports = {
    GetAllProducts,
    GetProductsByCategory,
    CreateProduct,
    UpdateProduct,
    DeleteProduct
}