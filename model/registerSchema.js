const mongoose=require("mongoose");
const registerSchema = new mongoose.Schema({
    userName: {
        type : String,
        required : true,
        unique :true,
        minlength:[3,"Username should be atleast 3 characters long"],
        maxlength:[20,"Username cannot exceed more than 20 character"],
        trim:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    }
});
module.exports.register = mongoose.model('Register',registerSchema);