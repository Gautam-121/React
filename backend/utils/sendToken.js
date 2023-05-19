const jwt = require("jsonwebtoken")

const sendToken = (user , res , statusCode) => {

    const token = jwt.sign({id : user._id},process.env.JWT_SECRET , {
        expiresIn : process.env.JWT_EXPIRED
    })

    const option = {
        expire : new Date(
            Date.now() + process.env.COOKIE_SECRET * 24 * 60 * 60 * 1000
        ),
        httpOnly : true
    }

    res.status(statusCode).cookie("token" , token , option).json({
        success : true ,
        user,
        token
    })
}

module.exports = sendToken