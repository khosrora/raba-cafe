const { Router } = require('express');
const router = new Router();


const authCTRL = require('../Controllers/authCTRL');




//? DESC ==> register user
//? POST METHOD
router.post("/register", authCTRL.register)

//? DESC ==> login user
//? POST METHOD
router.post("/login", authCTRL.login)



module.exports = router;