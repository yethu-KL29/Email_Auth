const express = require("express");
const { sendEmail } = require("../Contoller/emailContoller");
const router = express.Router();


router.get("/sendEmail",sendEmail)

module.exports = router;