const express = require('express')
const app = express()
const cors = require('cors')

const Router = require('./routes/index')

const PORT = process.env.PORT || 3001

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req,res) => res.json({ message: 'Server Working'}))
app.use('/api', Router)
app.listen(PORT, () => console.log(`Server connected and listening at port: ${PORT}`))