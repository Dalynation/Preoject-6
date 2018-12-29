const express = require('express');
const router = express.Router();

//-------------------------
const app = express();

app.use('/static', express.static('public')); //this middleware is where im expressing that my site uses static and public routes

app.set('view engine', 'pug'); //this is where I chosen to run the view engine on my server, and have also read pug files
//-------------------------

const { projects } = require('./../data.json'); // This reqires the data I have store in my Json file


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

router.get('/project/:id', (req, res) => {
  const { id } = req.params; // based on the id chosen the specific data for it will be retreived
  const projectData = projects[id];
  res.render('project', { projectData }); // this renders my project page with the project data
});


module.exports = router; // this'll help me require the needed modules as requested
