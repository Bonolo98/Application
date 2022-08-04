const pool = require("../config/database.config");
const express = require("express");
const bodyparser = require('body-parser');
const app = express();




exports.create = (request, response) => {
    const { tutorial_name, tutorial_desc } = request.body
  
    pool.query('INSERT INTO tutorials (tutorial_name, tutorial_desc) VALUES ($1, $2) RETURNING *', [tutorial_name, tutorial_desc], (error, results) => {
      if (error) {
        throw error
      }
      response.status(201).send(`User added with ID: ${results.rows[0].id}`)
    })
  }