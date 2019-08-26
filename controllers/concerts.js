const Concert = require('../models/concert');
const Ticket = require('../models/ticket');

module.exports = {
    index,
    new: newConcert,
    create,
    show,
    //addDestination
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

// function addDestination(req, res) {
//     Flight.findById(req.params.id, function(err, flight) {
//         flight.destinations.push(req.body);
//         flight.save(function(err, flight) {
//             res.redirect(`/flights/${flight._id}`);
//         });
//     });
// }