const express = require("express");
const route= require("./Route/allRoutes");
const connectMongoose = require('./model/dbConnect');
const mongoose=require("mongoose");
// const cookieParser = require('cookie-parser');
// const helmet = require('helmet');
// const cors = require('cors');
// const xssClean = require('xss-clean');


const app =  express();
//Middlewares
app.use(express.json());
// app.use(cookieParser());
// app.use(helmet());
// app.use(cors());
// app.use(xssClean());
app.use(route);
// app.use()

app.listen(5000, async()=>{
  await connectMongoose();
    console.log("Server running on port 5000");
})

