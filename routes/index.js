const express = require('express');
const router = express.Router();

router.use((req, res, next) => {
  console.log("World");
  next();
});

router.get('/', (req, res) => {
  res.render('index');
});

router.get('/about', (req, res) => {
  res.render('about');
});

router.get('/project', (req, res) => {
  res.render('project', { prompt: "Here's my projects!"});
});

module.exports = router;
