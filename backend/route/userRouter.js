const express = require("express")
const router = express.Router()
const {register , login , logOut} = require("../controller/userController")

router.route("/signIn").post(register)

router.route("/login").post(login)

router.route("/logOut").get(logOut)


module.exports = router