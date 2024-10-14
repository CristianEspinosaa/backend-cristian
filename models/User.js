import { Schema, model } from "mongoose";

let collection = 'users'
let schema = new Schema({                    // informacion que va a recibir la coleccion users
    name: {type: String, required: true},  // el typer es que tipo de valor va a tener y el require 
    email: {type:String, required: true},      // le indica a mongo si es necesario para funcionar o lo puede obviar
    password: {type:String, required: true},
    photo: {type:String, required: true},
    role: {type:Number, required: true},
},
{
    timestamps:true  // es una propiedad de mongo que registra cuando se creo el user y su ultimo update
})

let User = model(collection, schema)

export default User