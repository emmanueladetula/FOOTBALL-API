const express=require("express");
const  {createUser}  = require("../controllers/createUser");
const route=express.Router();
route.post("/registration",createUser)
module.exports=route;
