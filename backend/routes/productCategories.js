const express = require("express");
const mysql = require("mysql2");

const router = express.Router();

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
  multipleStatements: true,
});

router.get("/", (req, res) => {
  pool.query("select * from categories", (error, categories) => {
    if (error) res.status(500).send(error);
    else res.status(200).send(categories);
  });
});

module.exports = router;