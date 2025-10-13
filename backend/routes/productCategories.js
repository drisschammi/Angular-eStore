const express = require("express");
const pool = require("../shared/pool");
const router = express.Router();

router.get("/", (req, res) => {
  pool.query("select * from categories", (error, categories) => {
    if (error) res.status(500).send(error);
    else res.status(200).send(categories);
  });
});

module.exports = router;