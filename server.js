import expres from "express";
import "dotenv/config.js"

const server = expres()

const PORT = process.env.PORT

const ready = () => console.log("server ready in the max port:" + PORT)

server.listen(PORT, ready)

server.get('/', (request, response) => {
    response.send('Hola mundo en Express')
} )


server.get('/saludo', (request, response) => {
    response.send('bienvenido al mundo de Express')
} )

