// Requiring path to so we can use relative routes to our HTML files
const path = require('path');

const router = require('express').Router();


// Routes the user to pages
router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../../pages/index.html'));
});

router.get('/submission', (req, res) => {
  res.sendFile(path.join(__dirname, '../../pages/submission.html'));
});

module.exports = router;
