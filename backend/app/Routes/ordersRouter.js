const { Router } = require('express');
const router = new Router();

const orderCTRL = require('../Controllers/orderCTRL');
const upload = require('../utils/multer');


//? DESC ==> create order
//? POST METHOD
router.post("/order", upload.single("file"), orderCTRL.createOrder)

//? DESC ==> get orders
//? GET  METHOD
router.get("/order", orderCTRL.getOrders)

//? DESC ==> edit order
//? PUT METHOD
router.put("/order/:id", orderCTRL.editOrder)

//? DESC ==> delete order
//? DELETE METHOD
router.delete("/order/:id", orderCTRL.deleteOrder)



module.exports = router;