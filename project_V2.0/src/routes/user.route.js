const express = require("express");
const { User } = require("../controllers");

const router = express.Router()
const API_V1 = "/api/v1/";

router.get(API_V1+'users', User.getAllUsers)
router.post(API_V1+'register', User.addUser)



module.exports = router;