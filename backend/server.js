//DECLARING VARIABLES
const express = require("express"); // import express library
const cors = require("cors"); //import cors module
const app = express(); //Initialize express

//Import your environmental configs
const client = require("./app/Config/database.config");
const user = require("./app/routes/tutorial.routes");
const db = require('./app/routes/tutorial.routes');
const log = require('./app/routes/login.routes');
const reg = require('./app/routes/register.routes');
const pp = require('./app/routes/user.routes')
const bodyParser = require('body-parser');
const { application } = require("express");

const port = process.env.PORT || 8080;


app.use(express.json());
app.use(cors());



app.use('/api',pp)
app.use('/api',db)
app.use('/api',log)
app.use('/api',reg)


client.connect((err) =>{ // Connect to the Database
   if (err) {
     }
  else {
    console.log("Data logging initialised");
   }
});



 //RESPONSE FOR WHEN WE RUN THE SERVER
app.listen(port, process.env.baseURL , () =>{  
   console.log(`Server Running at ${port}.`) 
})


// REQUEST TO RUN THE SERVER
app.get("/status", (req, res) =>{
    res.status(200).send("Sever Initialized and Online. Ready to take OFF!");
});



//DECLARING OUR PORT
const hostURL = '0.0.0.0'; //Fault-Tolerant listening port for Backend. Picks available dynamic IPv4 and IPv6 addresses of the local host
//DECRLARING OUR PORT



// User endpoint API
// app.use("/post", user) 
// User endpoint API



