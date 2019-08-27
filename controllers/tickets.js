const Ticket = require('../models/ticket');
const Concert = require('../models/concert');

module.exports = {
    new: newTicket,
    create
}

function newTicket(req, res) {
    Concert.findById(req.params.id, function(err, concert) {
        res.render('tickets', { concert });
    });
}   

function create(req, res) {
    Concert.findById(req.params.id, function(err, concert) {
        Ticket.create(req.body, function(err, ticket) {
            ticket.concerts.push(concert._id);
            ticket.save(function(err, ticket) {
                res.redirect(`/concerts/${concert._id}`);
            });
        });
    });
}