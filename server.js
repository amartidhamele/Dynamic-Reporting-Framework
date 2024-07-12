// const express = require('express');
// const mysql = require('mysql');
// const cors = require('cors');

// const app = express();
// const port = 3000;

// app.use(cors()); // Enable CORS for all routes

// // Create MySQL connection
// const connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: 'root',
//   database: 'project'
// });

// connection.connect(err => {
//   if (err) {
//     console.error('Error connecting to MySQL: ', err);
//     return;
//   }
//   console.log('Connected to MySQL');
// });

// // Define a route to get data
// app.get('/data', (req, res) => {
//   const query = 'SELECT * FROM employee_hr_data';
//   connection.query(query, (err, results) => {
//     if (err) {
//       console.error('Error executing query: ', err);
//       res.status(500).send('Server Error');
//       return;
//     }
//     res.json(results);
//   });
// });

// app.listen(port, () => {
//   console.log(`Server running on http://localhost:${3000}`);
// });
