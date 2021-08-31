const { Router } = require('express');
const router = new Router();


const categoriesCTRL = require('../Controllers/categoriesCTRL');




//? DESC ==> create categoreis
//? POST METHOD
router.post("/categories", categoriesCTRL.createCategories)

//? DESC ==> get categories
//? GET METHOD
router.get("/categories", categoriesCTRL.getCategories)

//? DESC ==> edit categories
//? PUT METHOD
router.put("/categories/:id", categoriesCTRL.editCategory)

//? DESC ==> delete categories
//? DELETE METHOD
router.delete("/categories/:id", categoriesCTRL.deleteCategory)



module.exports = router;