const Ticket = require('../models/ticket');
const Concert = require('../models/concert');

module.exports = {
    new: newTicket,
    create,
    edit,
    update,
    delete: deleteTicket
}

function deleteTicket(req, res) {
    Ticket.findOneAndDelete(req.params.id, () => {
        res.redirect('/concerts');
    });
  }

function update(req, res) {
    req.body.done = !!req.body.done;
    Ticket.findOneAndUpdate(req.params.id, req.body);
    res.redirect(`/concerts/:id/edit${req.params.id}`);
  }


function edit(req, res) {
    var ticket = Ticket.getOne(req.params.id);
    res.render('concerts/edit', {
      ticket,
      ticket_id: req.params.id
    });
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