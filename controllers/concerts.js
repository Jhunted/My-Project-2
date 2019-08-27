const Concert = require('../models/concert');
const Ticket = require('../models/ticket');

module.exports = {
    index,
    new: newConcert,
    create,
    show,
    addLocation
};


function index(req, res) {
    Concert.find({}, function(err, concerts) {
        res.render('concerts/index', { concerts });
    });
}

function show(req, res) {
    Concert.findById(req.params.id, function(err, concerts) {
        Ticket.find({ concerts: concert._id }, function(err, concerts) {
            console.log(tickets)
            res.render('concerts/show', {
                title: 'Concert Detail',
                concert,
                tickets
            });
        })
    });
}

function newConcert(req, res) {
    res.render('concerts/new'); 
}

function create(req, res) {
    for(let key in req.body){
        req.body[key] === '' && delete req.body[key];
    }
    Concert.create(req.body, function(err, concert) {
        console.log(concert);
        res.redirect('/concerts');
    });
}

function addLocation(req, res) {
    Concert.findById(req.params.id, function(err, concert) {
        concert.locations.push(req.body);
        concert.save(function(err, concert) {
            res.redirect(`/concerts/${concert._id}`);
        });
    });
}