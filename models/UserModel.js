const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const passwordComplexity=require('joi-password-complexity');
const Joi = require('joi');

const UserSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true
    }
})

UserSchema.methods.generateAuthToken=function(){
    const token=jwt.sign({_id:this._id},process.env.JWT_KEY,{expiresIn:'7d'})
    return token
}

const User=mongoose.model('user',UserSchema)

const validate=(data) => {
  const schema=Joi.object({
    username:Joi.string().required().label("Username"),
    password:passwordComplexity().required().label("Password"),
    email:Joi.string().email().required().label("Email")
  })

  return schema.validate(data)
}

module.exports={User,validate}