const express = require("express");

const router = express.Router();
const {login, signup} = require('../controllers/User')

// Login route
router.post("/login", login);

// Signup route
router.post("/singup", signup);

module.exports = router;
