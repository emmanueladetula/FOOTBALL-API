const Joi = require ("joi")
const loginJoi =(data)=>{
    const schema=Joi.object({
     email :  Joi.string().required(),
     password:  Joi.string().min(8).max(1024),


})
return schema.validate(data)
}
module.exports.loginJoi= loginJoi;