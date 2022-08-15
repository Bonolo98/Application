const pool = require("../config/database.config");



module.exports.userProfile = (req, res) => {
    try {
        const id = parseInt(req.params.id)
        pool.query(`SELECT * FROM users WHERE id =$1`, [id], (error, results) => {
            if (error) {
                res.status(400).json(`error sql`)
            }
            res.status(200).json(results.rows) //Return a status 200 if there is no error
        })
    }
    catch (err) {
        res.status(500).json({
            error: "Database error while retrieving user",
        });
    };
}
