import mongoose, { Mongoose } from "mongoose";

let url = process.env.URI_MONGO

mongoose.connect(url)
.then(() => console.log("base de datos conectada"))
.catch(error => console.log(error))