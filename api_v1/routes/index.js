const express = require("express");
const router = express.Router();

router.get("/v1", (req, res) => {
  res.send("Hello World! from API v1");
});

module.exports = router;
