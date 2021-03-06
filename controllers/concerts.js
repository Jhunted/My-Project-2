const Concert = require('../models/concert');
const Ticket = require('../models/ticket');

module.exports = {
    index,
    new: newConcert,
    create,
    show,
    delete: deleteConcert,
    edit,
    update
};

function update(req, res) {
    req.body.done = !!req.body.done;
    console.log(req.params.id);
    Concert.findByIdAndUpdate(req.params.id, { done: req.body.done }, {new: true}, function(err){
        res.redirect(`/concerts`);
    });
};

function edit(req, res) {
    var concert = Concert.findById(req.params.id);
    res.render('concerts/edit', {
      concert,
      concert_id: req.params.id
    });
  }

function deleteConcert(req, res) {
    Concert.findOneAndDelete(req.params.id, () => {
        res.redirect('/concerts');
    });
  }

function index(req, res) {
    Concert.find({}, function(err, concerts) {
        console.log(concerts)
        res.render('concerts/index', { concerts });
    });
}

function show(req, res) {
    Concert.findById(req.params.id, function(err, concert) {
        Ticket.find({ concerts: concert._id }, function(err, tickets) {
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
        concert.save(function(err) {
            console.log(err)
            if (err) return res.redirect('concerts/new');
            res.redirect('/concerts');
        })
    });
}

