var mysql = require("mysql");

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection.provess.env.JAWSDB_URL
} 
else {
connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "joelspielberger",
  database: "burgers_db"
});
}

connection.connect();
  
module.exports = connection;