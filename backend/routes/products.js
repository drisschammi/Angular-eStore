const express = require("express");
const router = express.Router();
const pool = require("../shared/pool");

router.get("/", (req, res) => {
  pool.query("select * from products", (error, products) => {
    if (error) res.status(500).send(error);
    else res.status(200).send(products);
  });
});

router.get("/:id", (req, res) => {
  let id = req.params.id;
  pool.query("select * from products where id = ?", [id], (error, products) => {
    if (error) res.status(500).send(error);
    else res.status(200).send(products);
  });
});

module.exports = router;
