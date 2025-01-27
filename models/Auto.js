import { Schema, model } from "mongoose";

let collection = 'autos'

let schema = new Schema({
    marca: {type: String, required: true},
    modelo: {type: String, required: true},
},
{
    timestamp: true
})

let Auto = model(collection, schema)

export default Auto
