var express = require("express");
const pool = require("../db/db.config");
var router = express.Router();

/* GET home page. */
router.get("/", async function (req, res, next) {
  try {
    const [rows, fields] = await pool.query("SELECT 200");
    console.log({ rows, fields });
    res.status(200).json({ status: "OK", content: { message: "Working" } });
  } catch (error) {
    console.log(error?.message);
    res.status(500).json({ status: "500", message: error?.message });
  }
});

module.exports = router;
