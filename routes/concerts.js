const express = require('express');
const router = express.Router();
const concertCtlr = require('../controllers/concerts');

router.get('/', isLoggedIn, concertCtlr.index); 
router.get('/new', concertCtlr.new);
router.post('/', concertCtlr.create);
router.get('/:id', concertCtlr.show);
router.delete('/:id', concertCtlr.delete);
//router.put('/:id/edit', concertCtlr.edit);
// router.put('/:id', concertCtlr.update);

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect('/auth/google');
  }

module.exports = router;