const express = require("express");
const { Account } = require("../controllers");

const { addAccountValidate } = require("../middlewares/account.joi.validation");
const  validatorHandler  = require("../middlewares/validatorHandler");

const {verifyJWT , verifyRole } = require("../middlewares");

const router = express.Router()
const API_V1 = "/api/v1/";

router.post(API_V1+'newAccount', validatorHandler( addAccountValidate, 'body'), Account.addAccount)

// admin
//router.get(API_V1+'accounts', Account.getAllAccounts) 

// user
router.get(API_V1+'accounts', verifyJWT.isAuth , Account.getAllAccountsUser) 

module.exports = router;
