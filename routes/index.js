const express = require('express');
const router = express.Router();
const mysql = require('mysql');

router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'i2C'
  });
});

router.get('/top-table', (req, res) => {
  let connection = null;
  try {
    connection = _connect();
    connection.query('SELECT * FROM top', (err, rows) => {
      if (err) {
        console.log(err.stack);
        res.status(500).json({
          'error': 'Internal server error'
        });
      } else {
        res.json({
          'table': rows          
        })
      }
    });
  } finally {
    if (connection) {
      connection.end();
    }
  }
});

function _connect() {
  const connection = mysql.createConnection({
    host     : 'localhost',
    user     : process.env.USER,
    password : process.env.PASSWORD,
    database : 'dashboard'
  });
  connection.connect();
  return connection;
}

module.exports = router;