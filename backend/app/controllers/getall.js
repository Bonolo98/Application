
const pool = require("../config/database.config");
const express = require("express");
const bodyparser = require('body-parser');
const app = express();


// Retrieve all Tutorials from the database.
exports.getall = (req, res)=>{ 
    pool.query('SELECT * FROM tutorials ORDER BY tutorial_id ASC', (error,results)=>{
        if(error){
            throw error;
           }
           res.status(200).json(results.rows)
    });
    }; 

