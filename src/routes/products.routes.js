const {Router} = require('express');
const {getAllAvailable} = require('../controllers/products.controller');

const router = Router();

router.get("/products", getAllAvailable)
router.post("/products")

router
    .route("/products/:id")
    .get()
    .put()
    .delete()

module.exports = router;