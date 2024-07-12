// const express = require('express');
// const mysql = require('mysql');
// const cors = require('cors');

// const app = express();
// const port = 3002;

// app.use(cors());
// app.use(express.json());

// // MySQL database connection
// const connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: 'root',
//     database: 'project'
// });

// connection.connect(err => {
//     if (err) {
//         console.error('Error connecting to MySQL:', err);
//         return;
//     }
//     console.log('Connected to MySQL');
// });

// // Endpoint to get column names
// app.get('/columns', (req, res) => {
//     const query = 'SHOW COLUMNS FROM employee_hr_data';
//     connection.query(query, (err, results) => {
//         if (err) {
//             console.error('Error executing query:', err);
//             res.status(500).send({ error: 'Failed to fetch columns' });
//             return;
//         }
//         const columns = results.map(row => ({
//             field: row.Field,
//             type: row.Type
//         }));
//         res.json(columns);
//     });
// });

// // Endpoint to create a new table
// app.post('/createTable', (req, res) => {
//     const { tableName, fields } = req.body;
//     if (!tableName || !fields || fields.length === 0) {
//         return res.status(400).json({ error: 'Table name or fields not provided' });
//     }
//     const columns = fields.map(field => `${field} VARCHAR(255)`).join(', ');
//     const createTableQuery = `CREATE TABLE ${tableName} (${columns})`;

//     connection.query(createTableQuery, (err, results) => {
//         if (err) {
//             console.error('Error creating table:', err);
//             return res.status(500).json({ error: err.message });
//         }
//         res.json({ message: 'Table created successfully' });
//     });
// });

// app.listen(port, () => {
//     console.log(`Server running at http://localhost:${3002}`);
// });


// const express = require('express');
// const mysql = require('mysql');
// const cors = require('cors');
// const path = require('path');

// const app = express();
// const port = 3003;

// app.use(cors());
// app.use(express.json());

// // MySQL database connection
// const connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: 'root',
//     database: 'project'
// });

// connection.connect(err => {
//     if (err) {
//         console.error('Error connecting to MySQL:', err);
//         process.exit(1); // Exit the process with a failure code
//     }
//     console.log('Connected to MySQL');
// });

// // Serve static files from the 'public' directory
// app.use(express.static(path.join(__dirname, 'public')));

// // Endpoint to get column names
// app.get('/columns', (req, res) => {
//     const query = 'SHOW COLUMNS FROM employee_hr_data';
//     connection.query(query, (err, results) => {
//         if (err) {
//             console.error('Error executing query:', err);
//             res.status(500).json({ error: 'Failed to fetch columns' });
//             return;
//         }
//         const columns = results.map(row => ({
//             field: row.Field,
//             type: row.Type
//         }));
//         res.json(columns);
//     });
// });

// // Endpoint to create a new table and show all tables
// app.post('/createTable', (req, res) => {
//     const { tableName, fields } = req.body;
//     if (!tableName || !fields || fields.length === 0) {
//         return res.status(400).json({ error: 'Table name or fields not provided' });
//     }
//     const columns = fields.map(field => `${field} VARCHAR(255)`).join(', ');
//     const createTableQuery = `CREATE TABLE ${tableName} (${columns})`;

//     connection.query(createTableQuery, (err, results) => {
//         if (err) {
//             console.error('Error creating table:', err);
//             return res.status(500).json({ error: err.message });
//         }

//         // Copy data from the existing table to the new table
//         const fieldsList = fields.join(', ');
//         const copyDataQuery = `INSERT INTO ${tableName} (${fieldsList}) SELECT ${fieldsList} FROM employee_hr_data`;
//         connection.query(copyDataQuery, (err, results) => {
//             if (err) {
//                 console.error('Error copying data:', err);
//                 return res.status(500).json({ error: 'Failed to copy data' });
//             }

//             // Fetch the list of all tables
//             const showTablesQuery = 'SHOW TABLES';
//             connection.query(showTablesQuery, (err, results) => {
//                 if (err) {
//                     console.error('Error fetching tables:', err);
//                     return res.status(500).json({ error: 'Failed to fetch tables' });
//                 }
//                 const tables = results.map(row => Object.values(row)[0]); // Extract table names
//                 res.json({ message: 'Table created and data copied successfully', tables });
//             });
//         });
//     });
// });

// // Endpoint to get all tables
// app.get('/tables', (req, res) => {
//     const showTablesQuery = 'SHOW TABLES';
//     connection.query(showTablesQuery, (err, results) => {
//         if (err) {
//             console.error('Error fetching tables:', err);
//             return res.status(500).json({ error: 'Failed to fetch tables' });
//         }
//         const tables = results.map(row => Object.values(row)[0]); // Extract table names
//         res.json(tables);
//     });
// });

// // Endpoint to get table data
// app.get('/tableData', (req, res) => {
//     const { tableName } = req.query;
//     if (!tableName) {
//         return res.status(400).json({ error: 'Table name not provided' });
//     }
//     const query = `SELECT * FROM ${tableName}`;
//     connection.query(query, (err, results) => {
//         if (err) {
//             console.error('Error fetching table data:', err);
//             return res.status(500).json({ error: 'Failed to fetch table data' });
//         }
//         res.json(results);
//     });
// });

// app.listen(port, () => {
//     console.log(`Server running at http://localhost:${port}`);
// });


// const express = require('express');
// const mysql = require('mysql');
// const cors = require('cors');
// const path = require('path');

// const app = express();
// const port = 3004;

// app.use(cors());
// app.use(express.json());

// // MySQL database connection
// const connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: 'root',
//     database: 'project'
// });

// connection.connect(err => {
//     if (err) {
//         console.error('Error connecting to MySQL:', err);
//         process.exit(1); // Exit the process with a failure code
//     }
//     console.log('Connected to MySQL');
// });

// // Serve static files from the 'public' directory
// app.use(express.static(path.join(__dirname, 'public')));

// // Endpoint to get column names
// app.get('/columns', (req, res) => {
//     const query = 'SHOW COLUMNS FROM employee_hr_data';
//     connection.query(query, (err, results) => {
//         if (err) {
//             console.error('Error executing query:', err);
//             res.status(500).json({ error: 'Failed to fetch columns' });
//             return;
//         }
//         const columns = results.map(row => ({
//             field: row.Field,
//             type: row.Type
//         }));
//         res.json(columns);
//     });
// });

// // Endpoint to create a new table and show all tables
// app.post('/createTable', (req, res) => {
//     const { tableName, fields } = req.body;
//     if (!tableName || !fields || fields.length === 0) {
//         return res.status(400).json({ error: 'Table name or fields not provided' });
//     }
//     const columns = fields.map(field => `${field} VARCHAR(255)`).join(', ');
//     const createTableQuery = `CREATE TABLE ${tableName} (${columns})`;

//     connection.query(createTableQuery, (err, results) => {
//         if (err) {
//             console.error('Error creating table:', err);
//             return res.status(500).json({ error: err.message });
//         }

//         // Copy data from the existing table to the new table
//         const fieldsList = fields.join(', ');
//         const copyDataQuery = `INSERT INTO ${tableName} (${fieldsList}) SELECT ${fieldsList} FROM employee_hr_data`;
//         connection.query(copyDataQuery, (err, results) => {
//             if (err) {
//                 console.error('Error copying data:', err);
//                 return res.status(500).json({ error: 'Failed to copy data' });
//             }

//             // Fetch the list of all tables
//             const showTablesQuery = 'SHOW TABLES';
//             connection.query(showTablesQuery, (err, results) => {
//                 if (err) {
//                     console.error('Error fetching tables:', err);
//                     return res.status(500).json({ error: 'Failed to fetch tables' });
//                 }
//                 const tables = results.map(row => Object.values(row)[0]); // Extract table names
//                 res.json({ message: 'Table created and data copied successfully', tables });
//             });
//         });
//     });
// });

// // Endpoint to get all tables
// app.get('/tables', (req, res) => {
//     const showTablesQuery = 'SHOW TABLES';
//     connection.query(showTablesQuery, (err, results) => {
//         if (err) {
//             console.error('Error fetching tables:', err);
//             return res.status(500).json({ error: 'Failed to fetch tables' });
//         }
//         const tables = results.map(row => Object.values(row)[0]); // Extract table names
//         res.json(tables);
//     });
// });

// // Endpoint to get table data
// app.get('/tableData', (req, res) => {
//     const { tableName } = req.query;
//     if (!tableName) {
//         return res.status(400).json({ error: 'Table name not provided' });
//     }
//     const query = `SELECT * FROM ${tableName}`;
//     connection.query(query, (err, results) => {
//         if (err) {
//             console.error('Error fetching table data:', err);
//             return res.status(500).json({ error: 'Failed to fetch table data' });
//         }
//         res.json(results);
//     });
// });

// // Endpoint to delete a table
// app.post('/deleteTable', (req, res) => {
//     const { tableName } = req.body;
//     if (!tableName) {
//         return res.status(400).json({ error: 'Table name not provided' });
//     }
//     const deleteTableQuery = `DROP TABLE ${tableName}`;
//     connection.query(deleteTableQuery, (err, results) => {
//         if (err) {
//             console.error('Error deleting table:', err);
//             return res.status(500).json({ error: 'Failed to delete table' });
//         }
//         res.json({ message: 'Table deleted successfully' });
//     });
// });

// app.listen(port, () => {
//     console.log(`Server running at http://localhost:${port}`);
// });



const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const path = require('path');

const app = express();
const port = 3004;

app.use(cors());
app.use(express.json());

// MySQL database connection
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'project'
});

connection.connect(err => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
        process.exit(1); // Exit the process with a failure code
    }
    console.log('Connected to MySQL');
});

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Endpoint to get column names
app.get('/columns', (req, res) => {
    const query = 'SHOW COLUMNS FROM employee_hr_data';
    connection.query(query, (err, results) => {
        if (err) {
            console.error('Error executing query:', err);
            res.status(500).json({ error: 'Failed to fetch columns' });
            return;
        }
        const columns = results.map(row => ({
            field: row.Field,
            type: row.Type
        }));
        res.json(columns);
    });
});

// Endpoint to create a new table and show all tables
app.post('/createTable', (req, res) => {
    const { tableName, fields } = req.body;
    if (!tableName || !fields || fields.length === 0) {
        return res.status(400).json({ error: 'Table name or fields not provided' });
    }
    const columns = fields.map(field => `${field} VARCHAR(255)`).join(', ');
    const createTableQuery = `CREATE TABLE ${tableName} (${columns})`;

    connection.query(createTableQuery, (err, results) => {
        if (err) {
            console.error('Error creating table:', err);
            return res.status(500).json({ error: err.message });
        }

        // Copy data from the existing table to the new table
        const fieldsList = fields.join(', ');
        const copyDataQuery = `INSERT INTO ${tableName} (${fieldsList}) SELECT ${fieldsList} FROM employee_hr_data`;
        connection.query(copyDataQuery, (err, results) => {
            if (err) {
                console.error('Error copying data:', err);
                return res.status(500).json({ error: 'Failed to copy data' });
            }

            // Fetch the list of all tables
            const showTablesQuery = 'SHOW TABLES';
            connection.query(showTablesQuery, (err, results) => {
                if (err) {
                    console.error('Error fetching tables:', err);
                    return res.status(500).json({ error: 'Failed to fetch tables' });
                }
                const tables = results.map(row => Object.values(row)[0]); // Extract table names
                res.json({ message: 'Table created and data copied successfully', tables });
            });
        });
    });
});

// Endpoint to get all tables
app.get('/tables', (req, res) => {
    const showTablesQuery = 'SHOW TABLES';
    connection.query(showTablesQuery, (err, results) => {
        if (err) {
            console.error('Error fetching tables:', err);
            return res.status(500).json({ error: 'Failed to fetch tables' });
        }
        const tables = results.map(row => Object.values(row)[0]); // Extract table names
        res.json(tables);
    });
});

// Endpoint to get table data
app.get('/tableData', (req, res) => {
    const { tableName } = req.query;
    if (!tableName) {
        return res.status(400).json({ error: 'Table name not provided' });
    }
    const query = `SELECT * FROM ${tableName}`;
    connection.query(query, (err, results) => {
        if (err) {
            console.error('Error fetching table data:', err);
            return res.status(500).json({ error: 'Failed to fetch table data' });
        }
        res.json(results);
    });
});

// Endpoint to delete a table
app.post('/deleteTable', (req, res) => {
    const { tableName } = req.body;
    if (!tableName) {
        return res.status(400).json({ error: 'Table name not provided' });
    }
    const deleteTableQuery = `DROP TABLE ${tableName}`;
    connection.query(deleteTableQuery, (err, results) => {
        if (err) {
            console.error('Error deleting table:', err);
            return res.status(500).json({ error: 'Failed to delete table' });
        }
        res.json({ message: 'Table deleted successfully' });
    });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});


