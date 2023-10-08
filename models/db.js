const mysql = require('mysql');

const db = mysql.createConnection({
  host: 'localhost',      // Your MySQL host (usually localhost)
  user: 'root',           // Your MySQL user
  password: '',           // Your MySQL password (if any)
  database: 'seconddb',     // Name of the database you created in phpMyAdmin
});

// Connect to MySQL
db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
  } else {
    console.log('Connected to MySQL database');
  }
});

// Handle MySQL errors
// db.on('error', (err) => {
//   console.error('MySQL error:', err);
// });

// // Close the MySQL connection when the app exits
// process.on('SIGINT', () => {
//   db.end();
//   process.exit();
// });

// ... Define your routes and application logic here

module.exports = db;