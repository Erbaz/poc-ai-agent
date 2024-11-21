var express = require("express");
const pool = require("../db/db.config");
var router = express.Router();

// view-all-tables

const query = "SHOW TABLES;";

router.get("/", async function (req, res, next) {
  try {
    const [rows, fields] = await pool.query(query);
    const response_string = rows.map((row) => row[fields[0].name]).join(", ");
    res.json({ status: "OK", content: response_string });
  } catch (error) {
    res.json({ status: "500", message: error?.message });
  }
});

module.exports = router;
