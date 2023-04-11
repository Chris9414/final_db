const {Router} = require('express')
const {createCar} = require('../controllers/car.controller');
const authenticate = require('../database/middlewares/auth.middleware');
const {createCarValidator} = require('../database/validators/car.validators');

const router = Router();

router.get("/car")
router.post("/car", createCarValidator, authenticate, createCar)

router
    .route("/car/:id")
    .get()
    .put()
    .delete()

module.exports = router;

