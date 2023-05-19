const ErrorHandler = require("../utils/errorHandler")

const errorMiddleware = (err , req , res , next) => {

    err.message = err.message || "Internal Server error"
    err.statusCode = err.statusCode || 500

    if(err.name == "CastError"){
        const message = ""
        err = new ErrorHandler(message , 400)
    }

    return res.status(err.statusCode).json({
        success  : false ,
        message : err.message
    })
}

module.exports = errorMiddleware