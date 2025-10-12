require("dotenv").config();
const express = require("express");
const mysql = require("mysql2");

const app = express();

const PORT = process.env.PORT || 5001;

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
  multipleStatements: true,
});

app.get("/", (req, res) => {
  pool.getConnection((err, connection) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send("Connection Established");
    }
  });
});

const server = app.listen(PORT, () => {
  console.log("App is running on the port - 5001");
});
