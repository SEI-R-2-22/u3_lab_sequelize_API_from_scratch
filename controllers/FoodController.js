const { List, Food } = require('../models')

const GetAllFoods = async (req, res) => {
    try {
      const users = await Food.findAll()
      res.send(users)
    } catch (error) {
      throw error
    }
  }

// Food here represents an item to put on the shopping list
  const CreateNewFood = async (req, res) => {
    try {      
      let list_id = parseInt(req.params.user_id.list_id)
      let newFoodName = String(req.params.user_id.list_id.food_name)     
      let food = await Food.create(
          { 
            name: `${newFoodName}`,
          listId: `${list_id}`
            
          }
      )
      res.send(food)
    } catch (error) {
      throw error
    }
  }

  const UpdateFood = async (req, res) => {
    try {
      let foodId = parseInt(req.params.food_id)
      let updatedFood = await Food.update(req.body, {
        where: { id: foodId },
        returning: true
      })
      res.send(updatedFood)
    } catch (error) {
      throw error
    }
  }
  
  const DeleteFood = async (req, res) => {
    try {
      let foodId = parseInt(req.params.food_id)
      await Food.destroy({ where: { id: foodId}})
      res.send({ message: `Deleted food with an id of ${foodId}`})
    } catch (error) {
      throw error
    }
  }


module.exports = {
    GetAllFoods,
    CreateNewFood,
    UpdateFood,
    DeleteFood
    
}