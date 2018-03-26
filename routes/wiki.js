const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => res.send('Reached the wiki page!'));

router.post('/', (req, res, next) => res.send('POSTed to /wiki'));

router.get('/add', (req, res, next) => res.send('Reached the add wiki page!'));

module.exports = router;
