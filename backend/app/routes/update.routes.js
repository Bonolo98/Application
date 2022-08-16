const express = require("express");
const app = express.Router();
const bodyparser = require('body-parser');


const { update } = require("../controllers/update");


app.put("/update/:id", update)


module.exports = app;