const express = require("express");
const router = express.Router();

router.get("/v3", (req, res) => {
  res.send("Hello World! from API v3");
});

module.exports = router;
