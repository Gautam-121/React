const mongoose = require("mongoose")
const bcrypt = require("bcrypt")
const validator = require('validator');

const userSchema = new mongoose.Schema({

    name:{
        type:String,
        required:[true , "Please Enter Name"],
        trim:true
    },
    email:{
        type:String,
        required:[true , "Please Enter Email"],
        validate : [validator.isEmail , "Invalid email Id , Example :- foo@bar.com "]
    },
    password:{
        type:String,
        required:[true, "Please Enter Password"],
        validate:[validator.isStrongPassword , "Password should be minLength: 8, minLowercase: 1, minUppercase: 1, minNumbers: 1, minSymbols: 1 "],
        select : false
    },
    createdAt:{
        type:Date,
        default:new Date()
    }
})

userSchema.pre("save" , async function(){

    if(!this.isModified("password")){
        next()
    }

    this.password = await bcrypt.hash(this.password , 10)
})

userSchema.methods.comparePassword = async function(password){
    return await bcrypt.compare(password , this.password)
}

module.exports = mongoose.model("user" , userSchema)