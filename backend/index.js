const app = require("./app")
const dotenv = require("dotenv")
const connection = require("./config/mongooseConnection.js")

process.on("uncaughtException" , (err)=>{
    console.log(`Error is ${err}`)
    console.log(`Shutting Down due to Uncaught Exception Error`)

    process.exit(1)
})

//import Configaration
dotenv.config({path : "./config/.env"})

//Import mongooseConnection
connection()

const server = app.listen(process.env.PORT || 8080 , ()=>{
    console.log(`listening on port ${process.env.PORT || 8080}`)
})

process.on("unhandledRejection", (err)=>{
    console.log(`Error is ${err}`)
    console.log(`Shutting Down due to Unhandled Promise Rejection`)

    server.close(()=>{
        process.exit(1)
    })

})
