const express = require('express');
const path = require('path');

const router = express.Router();

const AppController = require('../controllers/AppController.js')

router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'views', 'index.html'));
});

router.get('/connexion', AppController.logPage)

module.exports = router;
