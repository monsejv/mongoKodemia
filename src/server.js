const express = require('express')
const postsRouter = require('./routers/posts')
const app = express()

app.use(express.json())
app.use('/posts', postsRouter)

app.get('/', (request, response) => {
    response.json({
        message: 'Hola'
    })
})

module.exports = app