'use strict'

var express = require('express');
var router = express.Router();
var Buku = require('../model/book');
var Customer = require('../model/customer');
var Transaction = require('../model/transaction');
var control = require('../controller/controller');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('response get');
});

router.get('/books', control.getBooks);

router.post('/books', control.createBooks);

router.delete('/books', control.removeBooks);

router.put('/books', control.updateBooks);

router.get('/customers', control.getCustomers);

router.post('/customers', control.createCustomers);

router.get('/transactions', control.getTransactions);

router.post('/transactions', control.createTransactions);

module.exports = router;
