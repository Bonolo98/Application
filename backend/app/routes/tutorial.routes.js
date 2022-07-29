const express = require("express");
const app = express.Router();



const controllers = require("../controllers/tutorials.controllers");
const {create} = require("../controllers/tutorials.controllers");
const {deleted} = require("../controllers/tutorials.controllers");
const {update} = require("../controllers/tutorials.controllers");

app.get("/get", controllers.getall);
app.get("/get/:id", controllers.getOne);
app.post("/create", create);
app.delete("/delete",deleted);
app.put("/update/:id", update);

module.exports = app;
