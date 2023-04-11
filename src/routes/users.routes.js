const {Router} = require('express');
const {createUser, updateUser, getUserCar} = require('../controllers/users.contoller')
const {createUserValidator, updateUserValidator} = require('../database/validators/users.vaidators')

const router = Router();

router.get("/users/:id/car", getUserCar)
router.post("/users", createUserValidator, createUser)

router
    .route("/users/:id")
    .get()
    .put(updateUserValidator, updateUser)
    .delete()

module.exports = router;