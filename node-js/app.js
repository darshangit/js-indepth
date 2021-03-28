const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, resp, next) => {
  resp.setHeader('Content-Type', 'text/html');
  next();
});

app.use((req, resp, next) => {
  let userName = req.body.username || 'Unknown User';
  resp.render('index', {
    user: userName,
  });
});

app.listen(3000);
