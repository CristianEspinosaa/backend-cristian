import express from "express";
import "dotenv/config.js"
import "./config/database.js"
import cors from 'cors'
import morgan from "morgan";
import indexRouter from './router/index.js'

const server = express()

const PORT = process.env.PORT

const ready = () => console.log("server ready in the max port:" + PORT)


server.use(express.json())                          // permite trabajar con formato json en entrada y salida
server.use(express.urlencoded({ extended: true}))   // permite el uso de extenciones en los link como & 
server.use(cors())                                    // es un parametro de seguridad para la entrada de peticiones
server.use(morgan('dev'))                           // controla y lleva un registro de las peticiones que nos hagan

server.use('/api', indexRouter)
server.listen(PORT, ready)

