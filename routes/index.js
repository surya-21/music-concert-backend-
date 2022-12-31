var express = require('express');
var router = express.Router();
const path=require("path");
const fs=require("fs");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/about', function(req, res, next) {
  res.render('about');
});
router.get('/contact', function(req, res, next) {
  res.render('contact');
});
router.get('/gallery', function(req, res, next) {
  res.render('gallery');
});
router.post("/submit", function (req, res) {
  let name = req.body.name;
  let email = req.body.email;
  let number = req.body.number;
  fs.appendFile(path.join(__dirname, "../data.txt"), `name: ${name}, email: ${email},number: ${number}\n`, function (err) {
  if (err) {
      console.log(err);
      return;
  }
  res.render(`submitted`);
  });
})


module.exports = router;