const express = require('express');
const bodyParser = require('body-parser');

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 7001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function(req, res) {
  return res.json({
    status: 'success',
    message: 'Welcome to More Recipes'
  });
});

app.listen(PORT, function(err) {
  err ? console.log(err) : console.log(`Server started on ${PORT}`);
});
