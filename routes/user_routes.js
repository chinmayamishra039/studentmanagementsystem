const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();
const jsonParser = bodyParser.json();

router.post("/register", jsonParser, async (req, res, next) => {
  //here req body is not coming??

  res.send("Register The Student");
});
router.get("/student-details", async (req, res, next) => {
  res.send("Here We can get Student Details");
});

module.exports = router;
