const express = require("express")
const { sendEmail } = require("./userController")


const router = express.Router()

router.post('/sendEmail', sendEmail)

module.exports = router