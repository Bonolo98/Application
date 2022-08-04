const express = require("express");
const app = express.Router();
const bodyparser = require('body-parser');


const {getone} = require("../controllers/getOne");
const { getall } = require("../controllers/getall");
const { create } = require("../controllers/create");
const {deleted} = require("../controllers/delete");
const { update } = require("../controllers/update");

app.get("/getAll", getall);
app.get("/get/:id",getone);
app.post("/create", create);
app.put("/update/:id", update)
app.delete("/delete/:id", deleted)



module.exports = app;
