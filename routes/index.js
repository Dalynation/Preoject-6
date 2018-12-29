const express = require('express');
const router = express.Router();

//-------------------------
const app = express();

app.use('/static', express.static('public')); //this middleware is where im expressing that my site uses static and public routes

app.set('view engine', 'pug'); //this is where I chosen to run the view engine on my server, and have also read pug files
//-------------------------

//----

// router.use((req, res, next) => {
//   console.log("World");
//   next();
// });

router.get('/', (req, res) => {
  res.render('index'); // This render my index page
});

router.get('/about', (req, res) => {
  res.render('about'); // This renders my about page
});

//----

module.exports = router; // this'll help me require the needed modules as requested
