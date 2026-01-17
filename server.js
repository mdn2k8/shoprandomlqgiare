
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => res.render('home'));
app.get('/ff', (req, res) => res.render('ff'));
app.get('/lq', (req, res) => res.render('lq'));
app.get('/nap-bank', (req, res) => res.render('nap-bank'));
app.get('/admin', (req, res) => res.render('admin'));

app.listen(PORT, () => {
  console.log('Shoprandomffgiare running on port ' + PORT);
});
