const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');

const app = express();
const port = 5500;

// Create a MySQL connection
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root', // replace with your MySQL username
    password: '5629', // replace with your MySQL password
    database: 'airline', // replace with your MySQL database name
});

// Connect to MySQL
connection.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
    } else {
        console.log('Connected to MySQL');
    }
});

app.use(bodyParser.json());

const path = require('path');

// Assuming signup.html is in a different directory
app.get('/', (_req, res) => {
    const htmlPath = path.join(__dirname ,'\sign.html');
    console.log('File path:', htmlPath); 
    res.sendFile(htmlPath);
});



// Handle user registration
app.post('/register', (req, res) => {
    const userData = req.body;

    // Insert user data into the MySQL database
    connection.query('INSERT INTO users SET ?', userData, (err, results) => {
        if (err) {
            console.error('Error registering user:', err);
            res.status(500).json({ error: 'Error registering user' });
        } else {
            console.log('User registered successfully');
            res.json({ message: 'User registered successfully', results });
        }
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
