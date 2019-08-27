const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const concertSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        // default: function() {
        //     const date = new Date();
        //     return date.setFullYear;
        //}
    },
    location: {
        type: String
    }
});

module.exports = mongoose.model('Concert', concertSchema);