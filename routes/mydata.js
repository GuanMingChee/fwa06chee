var express = require('express');
var router = express.Router();

/* GET home page for mydata. */
router.get('/mydata', function(req, res, next) {
  res.render('mydata', { title: 'Guan Ming Chee' });
});

module.exports = router;
