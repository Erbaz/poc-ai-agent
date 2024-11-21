var express = require("express");
const pool = require("../db/db.config");
var router = express.Router();

// run-query

router.post("/", async function (req, res, next) {
  const { body: { query } = {} } = req;
  if (typeof query === "string") {
    try {
      const [rows, fields] = await pool.query(query);
      const response_string = JSON.stringify(rows);
      res.json({ status: "OK", content: response_string });
    } catch (error) {
      res.json({ status: "500", message: error?.message });
    }
  } else {
    res.status(400).json({ status: "400", message: "query not provided" });
  }
});

module.exports = router;
