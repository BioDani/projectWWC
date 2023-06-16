const express = require("express");
const { User , Auth} = require("../controllers");

const { addUserValidate } = require("../middlewares/user.joi.validation")
const  validatorHandler  = require("../middlewares/validatorHandler")

const {verifyJWT , verifyRole } = require("../middlewares")

const router = express.Router()
const API_V1 = "/api/v1/";

router.post(API_V1+'register', validatorHandler( addUserValidate, 'body') , User.addUser)

router.post(API_V1+'login', Auth.login)

router.get(API_V1+'users' , verifyJWT.isAuth, verifyRole.isAdmin ,User.getAllUsers)


module.exports = router;