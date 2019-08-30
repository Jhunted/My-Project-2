const express = require('express');
const router = express.Router();
const concertCtlr = require('../controllers/concerts');

router.get('/', isLoggedIn, concertCtlr.index); 
router.get('/new', isLoggedIn, concertCtlr.new);
router.post('/', isLoggedIn, concertCtlr.create);
router.get('/:id', isLoggedIn, concertCtlr.show);
router.delete('/:id', isLoggedIn, concertCtlr.delete);
router.get('/:id/edit', isLoggedIn, concertCtlr.edit);
router.put('/:id', isLoggedIn, concertCtlr.update);

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect('/login');
  }

module.exports = router;