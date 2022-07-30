const express = require("express");
const router = express.Router();

router.get("/v2", (req, res) => {
  res.send("Hello World! from API v2");
});

module.exports = router;
