const express = require('express');
const mysql = require('mysql2/promise');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'contact',
  port: 3306
});

app.post('/submit-form', async (req, res) => {
  const formData = req.body;
  try {
    const connection = await pool.getConnection();
    const [result] = await connection.query('INSERT INTO qwerty SET ?', formData);
    connection.release();
    console.log('Data saved:', result);
    res.status(200).send('Data successfully saved');
  } catch (error) {
    console.error('Error saving data to the database:', error);
    res.status(500).send('Error saving data to the database');
  }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
