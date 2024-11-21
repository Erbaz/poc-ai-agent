var express = require("express");
const pool = require("../db/db.config");
const {
  DESCRIBE_TABLE_RELATIONS,
  DESCRIBE_TABLE,
} = require("../constants/queries");
var router = express.Router();

// describe-table

router.get("/", async function (req, res, next) {
  const { query: { table } = {} } = req;
  if (typeof table === "string") {
    try {
      const [rows, fields] = await pool.query(DESCRIBE_TABLE(table));
      const response_string = JSON.stringify(rows);
      res.json({ status: "OK", content: response_string });
    } catch (error) {
      res.json({ status: "500", message: error?.message });
    }
  } else {
    res.status(400).json({ status: "400", message: "tableName not provided" });
  }
});

router.get("/relations", async (req, res, next) => {
  const { query: { table } = {} } = req;
  if (typeof table === "string") {
    try {
      const [rows, fields] = await pool.query(DESCRIBE_TABLE_RELATIONS(table));
      const response_string = JSON.stringify(rows);
      res.json({ status: "OK", content: response_string });
    } catch (error) {
      res.json({ status: "500", message: error?.message });
    }
  } else {
    res.status(400).json({ status: "400", message: "tableName not provided" });
  }
});

module.exports = router;
