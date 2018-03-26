const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const nunjucks = require('nunjucks');
const path = require('path');
const models = require('./models');
const routes = require('./routes');

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, '/public')));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.set('view engine', 'html');
app.engine('html', nunjucks.render);
nunjucks.configure('views', {noCache: true});

app.use('/', routes);

models.db.sync({force: true})
  .then(() => {
    console.log('All tables created!');
    app.listen(3000, () => {
      console.log('Server is listening on port 3000');
    });
  })
  .catch(console.error.bind(console));
