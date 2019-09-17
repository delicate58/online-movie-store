const express=require("express");
const mongoose= require('mongoose');
const cors =require("cors");
require('dotenv').config();
const app= express();

//Import routers 
const authRouter= require("./routes/auth");

const db_url=`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0-e0g2p.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`
mongoose.connect(db_url,{useNewUrlParser: true,useUnifiedTopology: true } )
    .then(() =>{
         console.log("db connected");
    });

//middlewares
app.use(cors())
app.use(express.json())

//Route middlewares
app.use("/api/user",authRouter);

app.listen(3002,()=>{ console.log("app runing on Port 3002");});