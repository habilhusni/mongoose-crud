var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Buku = require('./book');

var transactionSchema = new Schema({
    memberid: String,
    days: Number,
    out_date: Date,
    due_date: Date,
    in_date: Date,
    fine: Number,
    booklist: [{type: Schema.Types.ObjectId, ref:'Book'}]
});

var Transaction = mongoose.model('Transaction', transactionSchema);

module.exports = Transaction;