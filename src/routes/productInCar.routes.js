const {Router} = require('express')
const {addProduct} = require('../controllers/productInCar.controller');
const authenticate = require('../database/middlewares/auth.middleware');

const router = Router();

router.get("/productincar")
router.post("/productincar", authenticate, addProduct)

router
    .route("/productincar/:id")
    .get()
    .put()
    .delete()

module.exports = router;

