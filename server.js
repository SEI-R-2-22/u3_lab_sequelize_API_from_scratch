const express = require('express')
const app = express()
const cors = require('cors')

const AppRouter = require('./routes/AppRouter')

const controller = require('./controllers/MovieController')


const PORT = process.env.PORT || 3001

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))

// app.get('/movies', controller.GetAllMovies)

// app.get('/', )
app.use('/api', AppRouter)

app.listen(PORT, () => console.log(`Sweet! Server started on port ${PORT}`))
