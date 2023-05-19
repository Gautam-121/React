const express = require("express")
const app = express()
const cors = require("cors")
const cookieParser = require("cookie-parser")
const errorMiddleware = require("./middleware/errorMiddleware")

app.use(express.json())
app.use(cors())
app.use(cookieParser())

const userRouter = require("./route/userRouter.js")

app.use("/api/v1" , userRouter)

app.use(errorMiddleware)

module.exports = app