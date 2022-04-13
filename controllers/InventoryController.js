const { Inventory } = require('../models')

const CreateNewInventory = async (req, res) => {

  try {
    const shop = await Inventory.create({
      name: "Exotic Imports",
      location: "Rancho Cucamonga, CA"
    }) 
    res.send(shop)
  } catch (error) {
    throw error
    
  }
}
const GetAllInventory = async (req, res) => {
  try {
    const result = await Inventory.findAll()
    res.send(result)
  } catch (error) {
    throw error
  }
}



module.exports = {
  CreateNewInventory,
  GetAllInventory
}
