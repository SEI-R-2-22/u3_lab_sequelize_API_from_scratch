const express = require('express')
const app = express()
const cors = require('cors')
const { User, Dog, Walker } = require('./models')

const AppRouter = require('./routes/AppRouter')

const PORT = process.env.PORT || 3001

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => res.json({ message: 'Server Works' }))
//app.use('/api', AppRouter)

app.get('/users', async (req, res) => {
  try {
    const users = await User.findAll({
      include: Dog
    })
    res.send(users)
  } catch (error) {
    throw error
  }
})

app.get('/users/:userId', async (req, res) => {
  try {
    const user = await User.findByPk(req.params.userId, {
      include: Dog
    })
    res.send(user)
  } catch (error) {
    throw error
  }
})

app.get('/dogs', async (req, res) => {
  try {
    const allDogs = await Dog.findAll({ include: [User, Walker] })
    res.send(allDogs)
  } catch (error) {
    throw error
  }
})

app.get('/dogs/:dogId', async (req, res) => {
  try {
    const dog = await Dog.findByPk(req.params.dogId, {
      include: [User, Walker]
    })
    res.send(dog)
  } catch (error) {
    throw error
  }
})

app.listen(PORT, () => console.log(`Server Started On Port: ${PORT}`))
