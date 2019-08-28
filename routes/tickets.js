const express = require('express');
const router = express.Router();
const ticketCtlr = require('../controllers/tickets');

router.get('/concerts/:id/tickets', ticketCtlr.new);

router.post('/concerts/:id/tickets', ticketCtlr.create);

router.put('/concerts/:id/tickets/edit', ticketCtlr.edit);


module.exports = router;