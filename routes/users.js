const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post("/about", (req, res) => {
  res.send("About this wiki");
});

module.exports = router;
