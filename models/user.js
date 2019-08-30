var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    name: String,
    email: String,
    googleId: String,
    tickets: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Tickets'
    }],
    concerts: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Concerts'
    }]
  }, {
    timestamps: true
  });


  module.exports = mongoose.model('User', userSchema);