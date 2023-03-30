const {Router} = require('express');
const {createUser, updateUser} = require('../controllers/users.contoller')

const router = Router();

router.get("/users")
router.post("/users", createUser)

router
    .route("/users/:id")
    .get()
    .put(updateUser)
    .delete()

module.exports = router;