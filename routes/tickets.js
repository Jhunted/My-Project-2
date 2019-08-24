const express = require('express');
const router = express.Router();
const ticketCtlr = require('../controllers/tickets');

router.get('/concerts/:id/tickets/new', ticketCtlr.new);

router.get('/concerts/:id/tickets/new', ticketCtlr.create);


module.exports = router;