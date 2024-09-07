// const http = require('http');
// const mysql = require('mysql2');

// // Create and connect to the MySQL database
// const db = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: 'NEW_PASSWORD', // Replace with your actual password
//   database: 'learning_path_dashboard'
// });

// db.connect((err) => {
//   if (err) {
//     console.error('Error connecting to the database:', err.stack);
//     return;
//   }
//   console.log('Connected to the database.');
// });

// // Create initial tables
// const createUsersTable = `
//   CREATE TABLE IF NOT EXISTS users (
//     id INT AUTO_INCREMENT PRIMARY KEY,
//     name VARCHAR(255) NOT NULL,
//     email VARCHAR(255) NOT NULL UNIQUE
//   );
// `;

// const createLearningPathsTable = `
//   CREATE TABLE IF NOT EXISTS learning_paths (
//     id INT AUTO_INCREMENT PRIMARY KEY,
//     path_name VARCHAR(255) NOT NULL,
//     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
//   );
// `;
// const createResourcesTable = `
//     CREATE TABLE IF NOT EXISTS resources (
//       id INT AUTO_INCREMENT PRIMARY KEY,
//       user_id INT,
//       resource_name VARCHAR(255) NOT NULL,
//       resource_type VARCHAR(50),
//       created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
//       FOREIGN KEY (user_id) REFERENCES users(id)
//     );
//   `;

// // Create tables
// db.query(createUsersTable, (err, results) => {
//   if (err) {
//     console.error('Error creating users table:', err.stack);
//     return;
//   }
//   console.log('Users table created or already exists.');
// });

// db.query(createLearningPathsTable, (err, results) => {
//   if (err) {
//     console.error('Error creating learning_paths table:', err.stack);
//     return;
//   }
//   console.log('Learning_paths table created or already exists.');
// });
// db.query(createResourcesTable, (err, results) => {
//   if (err) {
//     console.error('Error creating learning_paths table:', err.stack);
//     return;
//   }
//   console.log('Resources_Table table created or already exists.');
// });

// // Create the server
// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Node.js server is running\n');
// });

// // Start the server
// const PORT = process.env.PORT || 3101;
// server.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const connectDB = require('./db');
const User = require('./User');

const app = express();
const port = 3001;

app.use(bodyParser.json());
app.use(cors());

// Connect to the database
connectDB();

// Signup route
app.post('/signup', async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const user = new User({ username, email, password });
    await user.save();
    res.status(201).json({ message: 'User created successfully', redirect: '/home' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Login route
app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email, password });
    if (user) {
      res.status(200).json({ message: 'Login successful', redirect: '/home' });
    } else {
      res.status(401).json({ message: 'Invalid credentials' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
