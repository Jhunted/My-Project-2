const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });

// mongoose.connect('mongodb://localhost:27017/concertJournal', {
//     useNewUrlParser: true,
//     useCreateIndex: true
// });
mongoose.connection.on('connected', function () {
    console.log(`Mongoose connected to: ${process.env.DATABASE_URL}`);
  });
// const db = mongoose.connection;

// db.on('connected', function() {
//     console.log(`${db.name} is connected on ${db.host}`);
// });

// db.on('error', function(err) {
//     console.log('MongoDB has thrown an error: ', err);
// });

module.exports = mongoose;
