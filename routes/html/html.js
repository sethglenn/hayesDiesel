// Requiring path to so we can use relative routes to our HTML files
const path = require('path');

// const db = require('../../models');
const router = require('express').Router();


// Routes the user to report a crime
router.get('/', (_req, res) => {
  res.sendFile(path.join(__dirname, '../../pages/index.html'));
});


module.exports = router;
