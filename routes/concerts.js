const express = require('express');
const router = express.Router();
const concertCtlr = require('../controllers/concerts');

router.get('/', concertCtlr.index); 
router.get('/new', concertCtlr.new);
router.post('/', concertCtlr.create);
router.get('/:id', concertCtlr.show);


module.exports = router;