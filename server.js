const app = require('express')()
const cors = require('cors')
const express = require('express')

const AppRouter = require('./routes/AppRouter')

const PORT = process.env.PORT || 3001

app.use(cors())
app.use(express.json())

app.get('/', (req,res) => res.json({ message: 'Server Works'}))
app.use('/api', AppRouter)
app.listen(PORT, () => console.log(`Server Stated On Port: ${PORT}`))