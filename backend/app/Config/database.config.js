const {Pool} = require("pg");
const connectionString = 'postgres://mednfezgzcuymm:55d9d5d3c4a3c7ca728752413698bfeb0edff81b4cab921a9f75c97501c7d42e@ec2-3-208-79-113.compute-1.amazonaws.com:5432/d4q4nrggb8ju08'
 const pool = new Pool({
     connectionString: connectionString,
     ssl:{rejectUnauthorized: false //allows external access to database when using nodejs
}
 });

 module.exports = pool;