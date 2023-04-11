const {Router} = require('express');
const {getAllAvailable, createProduct, updateDescription} = require('../controllers/products.controller');
const authenticate = require('../database/middlewares/auth.middleware');
const {createProductValidator, updateProductValidator} = require('../database/validators/products.validators');

const router = Router();

router.get("/products", authenticate, getAllAvailable)
router.post("/products", createProductValidator, authenticate, createProduct)

router
    .route("/products/:id")
    .get()
    .put(updateProductValidator, updateDescription)
    .delete()

module.exports = router;