'use strict'
var express = require('express');
var router = express.Router();
var Buku = require('../model/book');
var Customer = require('../model/customer');
var Transaction = require('../model/transaction');

let getBooks = function(req, res, next) {

  Buku.find(function (err, books) {

    if (err) return console.error(err);
      res.send(books);
    })
   
   // return newdate
 }

let createBooks = function(req, res, next) {
  
  var createBuku = new Buku(
    {
     isbn: req.body.isbn,
     title: req.body.title,
     author: req.body.author,
     category: req.body.category,
     stock: req.body.stock 
    });

  createBuku.save(function (err) {
    if (!err) console.log('Success!');
  });  
  
  res.send(createBuku);

}

let removeBooks = function(req, res, next) {  

  Buku.remove(
    { 
      isbn: req.body.isbn 
    }, 
    function (err) {
      if (err) return handleError(err);
    // removed! 
  });

  res.send('Book removed!')

}

let updateBooks = function(req, res, next) {  

  Buku.findOneAndUpdate(
  {
    isbn: req.body.oldIsbn
  }, 
  { 
    isbn: req.body.isbn,
    title: req.body.title,
    author: req.body.author,
    category: req.body.category,
    stock: req.body.stock 
  }, function (err) {
      if (err) return handleError(err);
      // updated 
  })

  res.send('Book updated!')

}

let getCustomers = function(req, res, next) {

  Customer.find(function (err, customers) {
    if (err) return console.error(err);
      console.log(customers);
      res.send(customers);
    })
   
   // return newdate
 }
 
let createCustomers = function(req, res, next) {

  var createCustomer = new Customer(
    {
     name: req.body.name,
     memberid: req.body.memberid,
     address: req.body.address,
     zipcode: req.body.zipcode,
     phone: req.body.phone 
    });

  createCustomer.save(function (err) {
    if (!err) console.log('Success!');
  });  
  
  res.send(createCustomer);
   
   // return newdate
 }

let removeCustomers = function(req, res, next) {  

  Customer.remove(
    { 
      name: req.body.name 
    }, 
    function (err) {
      if (err) return handleError(err);
    // removed! 
  });

  res.send('Customer removed!')

}

let updateCustomers = function(req, res, next) {  

  Customer.findOneAndUpdate(
  {
    name: req.body.oldName
  }, 
  { 
    name: req.body.name,
    memberid: req.body.memberid,
    address: req.body.address,
    zipcode: req.body.zipcode,
    phone: req.body.phone 
  }, function (err) {
      if (err) return handleError(err);
      // updated 
  })

  res.send('Customer updated!')

}

let getTransactions = function(req, res, next) {

   Transaction.find({})
             .populate('memberId')
             .populate('booklist')
             .exec((err,results) => {
              if(err) {
                res.send(err.message)
              } else {
                res.send(results)
              }
             })
   
   // return newdate
 } 

let createTransactions = function(req, res, next) {
  let _booklist;

  if(/[,]/.test(req.body.booklist)) {
    _booklist = req.body.booklist.split(',');
  }else {
    _booklist = req.body.booklist;
  }

  var createTransaction = new Transaction(
    {
     memberid: req.body.memberid,
     days: req.body.days,
     out_date: new Date(),
     due_date: new Date(),
     in_date: new Date(),
     fine: req.body.fine,
     booklist: _booklist 
    });

  createTransaction.save(function (err) {
    if (!err) console.log('Success!');
  });  
  
  res.send(createTransaction);
   
   // return newdate
 } 

let removeTransactions = function(req, res, next) {  

  Customer.remove(
    { 
      memberid: req.body.memberid 
    }, 
    function (err) {
      if (err) return handleError(err);
    // removed! 
  });

  res.send('Transaction removed!')

}

let updateTransactions = function(req, res, next) {  

  Buku.findOneAndUpdate(
  {
    memberid: req.body.oldMemberId
  }, 
  { 
    memberid: req.body.memberid,
    days: req.body.days,
    out_date: new Date(),
    due_date: new Date(),
    in_date: new Date(),
    fine: req.body.fine,
    booklist: _booklist 
  }, function (err) {
      if (err) return handleError(err);
      // updated 
  })

  res.send('Customer updated!')

}

 module.exports = {
  getBooks,
  createBooks,
  removeBooks,
  updateBooks,
  getCustomers,
  createCustomers,
  getTransactions,
  createTransactions
}