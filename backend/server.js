//DECLARING VARIABLES
const express = require("express"); // import express library
const cors = require("cors"); //import cors module
const app = express(); //Initialize express

//Import your environmental configs
const client = require("./app/Config/database.config");
const user = require("./app/routes/tutorial.routes");
const db = require('./app/controllers/tutorials.controllers')
const bodyParser = require('body-parser')
const port = process.env.PORT || 8080;


app.use(express.json());
app.use(cors());


app.get('/get', db.getall)
app.get('/get/:id', db.getOne)
app.post('/create', db.create)
app.put('/update/:id', db.update)
app.delete('/delete/:id', db.deleted)


client.connect((err) =>{ // Connect to the Database
   if (err) {
     }
  else {
    console.log("Data logging initialised");
   }
});


// app.get('/', (request, response) => {
//    response.json({ info: 'Node.js, Express, and Postgres API' })
//  })



 //RESPONSE FOR WHEN WE RUN THE SERVER
app.listen(port, process.env.baseURL , () =>{  
   console.log(`Server Running at ${port}.`) 
})


// REQUEST TO RUN THE SERVER
app.get("/status", (req, res) =>{
    res.status(200).send("Sever Initialized and Online. Ready to take OFF!");
});



//DECLARING OUR PORT
// const port = process.env.PORT || 8080;
const hostURL = '0.0.0.0'; //Fault-Tolerant listening port for Backend. Picks available dynamic IPv4 and IPv6 addresses of the local host
//DECRLARING OUR PORT



// User endpoint API
// app.use("/post", user) 
// User endpoint API



