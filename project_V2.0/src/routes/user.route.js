const express = require("express");
const { User } = require("../controllers");

const { addUserValidate } = require("../middlewares/user.joi.validation")
const  validatorHandler  = require("../middlewares/validatorHandler")

const router = express.Router()
const API_V1 = "/api/v1/";

router.post(API_V1+'register', validatorHandler( addUserValidate, 'body') , User.addUser)

router.get(API_V1+'users', User.getAllUsers)



module.exports = router;