const { Router } = require('express');
const {
    userGet,
    userPut,
    userPost,
    userPost201,
    userDelete,
    userPatch } = require('../controllers/users');

const router = Router();

router.get("/", userGet);

// Using segment params on route
router.put("/:id", userPut);

router.post("/", userPost);

router.post("/201", userPost201);

router.delete("/", userDelete);

router.patch("/", userPatch);

module.exports = router;