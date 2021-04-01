const express = require('express');
const bodyParser = require('body-parser');
const locationRoutes = require('./routes/location');

const app = express();

// app.set('view engine', 'ejs');
// app.set('views', 'views');

// app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, GET');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});
app.use(locationRoutes);

// app.use((req, resp, next) => {
//   resp.setHeader('Content-Type', 'text/html');
//   next();
// });

// app.use((req, resp, next) => {
//   let userName = req.body.username || 'Unknown User';
//   resp.render('index', {
//     user: userName,
//   });
// });

app.listen(process.env.PORT || 3000);
