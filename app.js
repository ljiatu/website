const express = require('express');
const favicon = require('serve-favicon');
const path = require('path');
const sslRedirect = require('heroku-ssl-redirect');
const app = express();

app.set('port', (process.env.PORT || 3000));
app.set('view engine', 'pug');
app.use('/static', express.static('static'));
app.use(favicon(path.join(__dirname, 'static', 'images', 'favicon.ico')));
app.use(sslRedirect());

app.get('/', (req, res) => {
  res.render('index');
});

app.listen(app.get('port'));
