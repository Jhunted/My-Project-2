const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const concertSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    date: {
        type: Date,
    },
    location: {
        type: String
    }
});

module.exports = mongoose.model('Concert', concertSchema);