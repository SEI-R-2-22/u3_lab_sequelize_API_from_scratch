const { Property } = require('../models')

const GetAllProperties = async (req, res) => {
    try {
        const allProperties = await Property.findAll()
        res.send(allProperties)
    } catch (error) {
      throw error  
    }
}

const GetPropertyDetails = async (req, res) => {
    try {
        const propertyDetails = await Property.findByPk(
            req.params.property_id
        )
        res.send(propertyDetails)
    } catch (error) {
        throw error
    }
}

const CreateProperty = async (req, res) => {
    try {
        const newProperty = await Property.create(req.body)
        res.send(newProperty)
    } catch (error) {
        throw error
    }
}

const UpdateProperty = async (req, res) => {
    try {
        const propertyId = parseInt(req.params.property_id)
        const updatedProperty = await Property.update(req.body, {
            where: { id: propertyId},
            returning: true
        })
        res.send(updatedProperty)
    } catch (error) {
        throw error
    }
}

const DeleteProperty = async (req, res) => {
    try {
        const propertyId = parseInt(req.params.property_id)
        await Property.destroy({
            where: { id: propertyId }
        })
        res.send({ message: `Deleted property with an id of ${propertyId}`})
    } catch (error) {
        throw error
    }
}


module.exports = {
    GetAllProperties,
    GetPropertyDetails,
    CreateProperty,
    UpdateProperty,
    DeleteProperty
}
