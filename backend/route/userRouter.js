const express = require("express")
const router = express.Router()
const {register , login , logOut , getData , customerDetail} = require("../controller/userController")

router.route("/register").post(register)

router.route("/login").post(login)

router.route("/logOut").get(logOut)


module.exports = router