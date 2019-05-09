const mysql = require("mysql");
// const connection = mysql.createConnection(process.env.JAWSDB_URL);

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL)
  console.log("JAWSDB connected")
} else {
  connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "superroot",
    database: "consumption_db"
  });
  console.log("MYSQL connected")
}

connection.connect();

module.exports = connection;