
const pool = require("../config/database.config");
const express = require("express");
const bodyparser = require('body-parser');
// const { Pool } = require("pg");
const app = express();



// Find a single Tutorial with an id
exports.getone = (req, res) => {
    const tutorial_id = parseInt(req.params.id)
    const data =pool.query('SELECT tutorial_name, tutorial_desc FROM tutorials WHERE tutorial_id = $1',[tutorial_id], (error,results)=>{
        if(error){
            throw error;
           }
           res.status(200).json(results.rows)
    });
};