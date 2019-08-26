const express = require('express');
const router = express.Router();
const concertCtlr = require('../controllers/concerts');

router.get('/', concertCtlr.index); 
router.get('/new', concertCtlr.new);
router.post('/', concertCtlr.create);
router.get('/:id', concertCtlr.show);

// // POST /flights/:id/destinations => add a destination record to an existing flight

// router.post('/:id/destinations', flightCtlr.addDestination);

module.exports = router;