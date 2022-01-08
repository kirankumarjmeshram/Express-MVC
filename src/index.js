const express = require("express");

const userController = require("./controllers/user.controller");

const connect = require("./configs/db")
//const mongoose =require("mongoose");

const app = express();

app.use(express.json());

app.use("/user",userController);

app.listen(3456,async ()=>{
   try {
    await connect()
    console.log("Listening on port 3456")
   } catch (error) {
       console.log(error.message)
   }
});