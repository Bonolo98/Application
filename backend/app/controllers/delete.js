const pool = require("../config/database.config");
const express = require("express");
const bodyparser = require('body-parser');
const app = express();



// Delete all Tutorials from the database.
exports.deleted = (request, response) => {
    const tutorial_id = parseInt(request.params.id)
  
    pool.query('DELETE FROM tutorials WHERE tutorial_id = $1', [tutorial_id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`User deleted with ID:${tutorial_id}`)
    })
  }