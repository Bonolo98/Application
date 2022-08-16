

const express = require("express");
const router = express.Router();
const userP = require('../controllers/Profile')


router.get('/profile/:id', userP.userProfile)


module.exports = router;