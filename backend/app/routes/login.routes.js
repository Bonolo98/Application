const express = require("express");
const router = express.Router();
const login = require("../controllers/login");
const Profile = require('../controllers/Profile')

router.post('/login',login.login);


module.exports = router;