require('dotenv').config()

const dbConnect = require('./src/lib/db')
const server = require('./src/server')

const listenServer = function(){
    return new Promise((resolve, reject) => {
        server.listen(8080, () => {
            resolve()
        })
    })
}

async function main(){
    await dbConnect()
    console.log('DB CONNECTED')
    await listenServer()
    console.log('SERVER LISTENING')
}

main()
    .then(() => {
        console.log('API READY')
    })
    .catch(error => {
        console.log('Error: ', error)
    })
    