const express = require('express')
const postsRouter = require('./routers/posts')
const usersRouter = require('./routers/users')
const cors = require('cors')
const app = express()

app.use(cors())
app.use(express.json())
app.use('/posts', postsRouter)
app.use('/users', usersRouter)

app.get('/', (request, response) => {
    response.json({
        message: 'Hola'
    })
})

module.exports = app