const express = require('express');

const app = express();

app.use('/static', express.static('public'));

app.set('view engine', 'pug');

// app.use((req, res, next) => {
//   console.log("Hello")
//   const err = new Error ('No!');
//   err.status = 500;
//   next();
// });

const routes = require('./routes');

app.use(routes);


app.use((req, res, next) => {
 const err= new Error('Not Found');
 err.status = 404;
console.log("Sorry, this page doesn't exist")
 next(err);
});

app.use((err, req, res, next) => {
  res.locals.error = err;
  res.status(err.status);
  res.render('error');
})

app.listen(3000, () => {
  console.log('The app is running on localhost:3000')
});
