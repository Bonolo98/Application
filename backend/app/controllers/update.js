
const pool = require("../config/database.config");
const express = require("express");
const bodyparser = require('body-parser');
const app = express();


exports.update = (request, response) => {
        const tutorial_id = parseInt(request.params.id)
        const { tutorial_name, tutorial_desc } = request.body
      
        pool.query(
          'UPDATE tutorials SET tutorial_name = $1, tutorial_desc = $2 WHERE tutorial_id = $3',
          [tutorial_name, tutorial_desc, tutorial_id],
          (error, results) => {
            if (error) {
              throw error
            }
            response.status(200).send(`User modified with ID: ${tutorial_id}`)
          }
        )
      }
