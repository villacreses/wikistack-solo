const express = require('express');
const router = express.Router();

const wiki = require('./wiki');

router.use('/wiki', wiki);
router.get('/', (req, res) => res.send('It still works!'));

module.exports = router;
