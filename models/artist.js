const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const artistSchema = new Schema({
    name: {
        type: String,
        required: true,      
    },
    genre: {
        type: String,
    }
});



module.exports = mongoose.model('Artist', artistSchema);