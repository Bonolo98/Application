const {Pool} = require("pg");
// const model = require("../model/database.model")
//const client = new Client(process.env.DB_URL);
const connectionString = 'postgres://lcaowuxpqydydx:8238f63c51c0cc11c011d60df5636986efe6eab8b86c8176f210ee71825fa2c9@ec2-54-208-104-27.compute-1.amazonaws.com:5432/dbfgh5a20bbfar'
 const pool = new Pool({
     connectionString: connectionString,
     ssl:{rejectUnauthorized: false //allows external access to database when using nodejs
}
 });

 module.exports = pool;