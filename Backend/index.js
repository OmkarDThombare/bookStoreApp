import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import bookRoute from "./route/book.route.js"
import userRoute from "./route/user.route.js"
import cors from "cors"
const app = express()
app.use(cors());
app.use(express.json())
dotenv.config();

const PORT = process.env.PORT || 4000
const MongoDBURI = process.env.MongoDBURI

//Connect To MongoDB
try{
   mongoose.connect(MongoDBURI ,{
    useNewUrlParser:true ,
    useUnifiedTopology:true 
   })
   console.log("Connected to mongo ")
}
catch(error){
   console.log("Error",error)
}

//Defining Routes ::: 
app.use("/book" , bookRoute)
app.use("/user" , userRoute)


app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})