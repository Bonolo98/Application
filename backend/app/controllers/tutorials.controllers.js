
const pool = require("../config/database.config");
const express = require("express");
// const { Pool } = require("pg");
const app = express();
// const Pool = require('pg').Pool

// Create and Save a new Tutorial
create = (req,res)=>{ 
    const {id} = req.body;
    const {tutorial_name,tutorial_desc} = req.body
    pool.query('INSERT INTO tutorials Values ($1) RETURNING tutorial_id',[tutorial_id], (error,results)=>{
            if(error){
                throw error;
            }
            res.status(201).send(`status added with ID:${results.rows[0].id}`);
        
        });
    };




// Retrieve all Tutorials from the database.
getall = (req,res)=>{ 
    pool.query('SELECT * FROM tutorials ORDER BY tutorial_id ASC', (error,results)=>{
        if(error){
            throw error;
           }
           res.status(200).json(results.rows)
    });
    }; 



// Find a single Tutorial with an id
getOne = (req, res) => {

    // const prod_id = parseInt(req.params.prod_id)
    pool.query('SELECT * FROM tutorials ORDER BY tutorial_id ASC',[tutorial_id], (error,results)=>{
        if(error){
            throw error;
           }
           res.status(200).json(results.rows)
    });
  


};


// Update a Tutorial by the id in the request
update = (req,res)=>{
    const id = parseInt(req.params.id)
    const {tutorial_name,tutorial_desc} = req.body

    pool.query('UPDATE tutorials SET tutorial_id = $1',[id],
    (error,results) =>{
        if (error){
            if (error)
            throw error;
        }
        res.status(200).send(`status modified with ID: ${id}`)
    })
    } 



// Delete all Tutorials from the database.
deleted = (req,res)=>{
    const id = parseInt(req.params.id)
    pool.query('DELETE from tutorials where tutorial_id = $1',[id], (error ,results)=>{
        if(error)
        {
            throw error;
        }
        res.status(200).send(`status deleted with ID: ${id}`)
    })
}


module.exports = {
    getall,
    getOne,
    create,
    update,
    deleted,
  }

// Delete all Tutorials from the database.
// exports.deleteAll = (req, res) => {
  
// };
