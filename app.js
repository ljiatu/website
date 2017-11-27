const express = require('express');
const app = express();

app.set('port', (process.env.PORT || 3000));
app.set('view engine', 'pug');
app.use('/static', express.static('static'));

app.get('/', (req, res) => {
  res.render('index');
});

app.listen(app.get('port'));
