const express = require("express");
const { Account } = require("../controllers");

const { addAccountValidate } = require("../middlewares/account.joi.validation");
const  validatorHandler  = require("../middlewares/validatorHandler");

const router = express.Router()
const API_V1 = "/api/v1/";

router.post(API_V1+'newAccount', validatorHandler( addAccountValidate, 'body'), Account.addAccount)

router.get(API_V1+'accounts', Account.getAllAccounts)

module.exports = router;