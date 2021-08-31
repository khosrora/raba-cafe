const { Router } = require('express');
const router = new Router();


const reservationCTRL = require('../Controllers/reservationCTRL');




//? DESC ==> create reservation
//? POST METHOD
router.post("/reservation", reservationCTRL.createReservation)

//? DESC ==> get reservation
//? GET METHOD
router.get("/reservation", reservationCTRL.getReservation)

//? DESC ==> delete reservation
//? DELETE METHOD
router.delete("/reservation/:id", reservationCTRL.deleteReservation)



module.exports = router;