const express = require("express");

const userController = require("./controllers/user.controller");

const connect = require("./configs/db")
const mongoose =require("mongoose");
// const connect = ()=>{
//     return mongoose.connect("mongodb://127.0.0.1:27017/database");
// }

// const userSchema = new mongoose.Schema({
//     first_name:{type:String, required:false},
//     last_name:{type:String,required:false},
//     email:{type:String, required:false},
//     gender:{type:String,required:false,default:"male"},
//     age: {type:Number,required:false},                
// })

//const User = mongoose.model("user",userSchema);

const app = express();

app.use(express.json());

app.use("/user",userController);

// app.get("/users",async (req,res)=>{
//     const users = await User.find().lean().exec();
//     return res.send(users);
   
// });

// app.post("/users", async (req, res) => {

//     try {
  
//   const users = await User.create(req.body);

//   return res.status(201).send(users)


        
//     } catch (err) {
//         return res.status(500).send(err.message) 
//     }



// })



app.listen(3456,async ()=>{
   try {
    await connect()
    console.log("Listening on port 3456")
   } catch (error) {
       console.log(error.message)
   }
});