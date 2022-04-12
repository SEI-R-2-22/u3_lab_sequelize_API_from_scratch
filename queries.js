const { Albums, Songs, Artist } = require('./models')
const Sequelize = require('sequelize')
const Op = Sequelize.Op

function stringify(data) {
    console.log(JSON.stringify(data, null, 2))
  }

const getAllAlbums = async () => {
  try {
   
    const allAlbums = await Albums.findAll()
    return allAlbums
  } catch (error) {
    console.log(error)
  }
}

const createAlbums = async () => {
  try {
    
    const createAlbums = await Albums.create({
        name: "eloy",
        releaseDate: "today"
    })
    return createAlbums
  } catch (error) {
    console.log(error)
  }
}

const updateAlbums = async () => {
  try {
    
    const updateAlbums = await Albums.update(
        {name: "new eloy"},
        {where: {name: "eloy"}}
    )
    return updateAlbums
  } catch (error) {
    console.log(error)
  }
}

const destroyAlbums = async () => {
  try {
 
    const destroyAlbums = await Albums.destroy(
        {where: {id: 101}}
    )
    return destroyAlbums
  } catch (error) {
    console.log(error)
  }
}

module.exports = {
 destroyAlbums,
  createAlbums,
  updateAlbums,
  getAllAlbums
}