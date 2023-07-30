const Joi = require ("joi")
const registrationSchema =(data)=>{
    const schema=Joi.object({
     userName: Joi.string().required(),
     email :  Joi.string().required(),
     password:  Joi.string().min(8).max(1024),
     teamName:  Joi.string().required(),
     country: Joi.string().required(),

})
return schema.validate(data)
}
module.exports.registrationSchema= registrationSchema;