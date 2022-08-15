

const express = require("express");
const router = express.Router();
const Profile = require('../controllers/Profile')


router.get('/profile/:id', Profile.userProfile)


module.exports = router;