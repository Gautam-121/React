const User = require("../model/userModel")
const sendToken =  require("../utils/sendToken.js")
const ErrorHandler = require("../utils/errorHandler")

const register = async(req ,res , next)=>{

    try{

        console.log("Enter")

    const {name , email , password} = req.body

    const isAlredyExist = await User.findOne({email})

    if(isAlredyExist){
        return next(new ErrorHandler("email is Already exist" , 400))
    }

    const user = await User.create({
        name : name,
        email : email,
        password : password
    })

    sendToken(user , res , 201)

    }catch(err){
        return next(new ErrorHandler(err , 500))
    }
}

const login = async (req , res , next) => {

   try{
    const {email , password} = req.body

    if(!email || !password){
        return next(new ErrorHandler("Please Enter Email and Password" , 400))
    }

    const user = await User.findOne({email}).select("+password")

    console.log(user)

    if(!user){
        return next(new ErrorHandler("Resource Not Found , Please Register" , 401))
    }

    const compare = await user.comparePassword(password)

    console.log(compare)

    if(!compare){
        return next(new ErrorHandler("Wrong Email and Password", 400))
    }

    sendToken(user , res , 200)

   }catch(err){
    return next(new ErrorHandler(err , 500))
   }
}

const logOut = async (req , res , next)=>{

    try{

        res.cookie("token" , null , {
            expires : new Date( Date.now())
        })
    
        res.status(200).json({
            success : true ,
            message : "LogOut Successfully"
        }) 
    }catch(err){
        return next(new ErrorHandler(err , 500))
    }
}




module.exports = {register , login , logOut  }