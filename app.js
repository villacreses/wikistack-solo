const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const nunjucks = require('nunjucks');

app.use(morgan('dev'));
app.use(express.static('/public'));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.set('view engine', 'html');
app.engine('html', nunjucks.render);
nunjucks.configure('views', {noCache: true});

app.get('/', (req, res) => res.send('It works!'));

app.listen('3000', () => console.log('Listening on port 3000'));
