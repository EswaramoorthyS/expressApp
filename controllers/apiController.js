const db = require('../models/db');

exports.getUsers = async (req, res) => {
    console.log("api conteoller")
  const query = 'SELECT * FROM user'; // Modify this SQL query as needed
//   const query =await user.findAll(); // Modify this SQL query as needed

  db.query(query, (err, results) => {
    if (err) {
      console.error('Error executing MySQL query:', err);
      res.status(500).json({ error: 'Internal Server Error -----------------' });
    } else {
        console.log("db sucess+++++++++")
        console.log(results,"db sucess+++++++++")

      res.json(results);
    }
  });
};

