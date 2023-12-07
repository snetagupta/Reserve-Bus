const express = require("express");
const createNewTrip = require("../controllers/createNewTrip");
const getTrip = require("../controllers/getTrip");
const getTripByDate = require("../controllers/getTripByDate");
const getTripByQuery = require("../controllers/getTripByQuery");
const savedTickets = require("../controllers/savedTickets");

const router = express.Router();



router.post('/trips', createNewTrip);
router.get('/get',getTrip);
router.get('/:date',getTripByDate);
router.get('/tripsQuery',getTripByQuery);
router.post('/tickets', savedTickets);

module.exports = router;