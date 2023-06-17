const express = require("express");
const { User, Goal } = require("../controllers");


const {verifyJWT } = require("../middlewares");

const router = express.Router()
const API_V1 = "/api/v1/";


//router.post(API_V1+'newGoal', validatorHandler( addAccountValidate, 'body'), Goal.addGoal)
router.post(API_V1+'newGoal', validatorHandler( addAccountValidate, 'body'), Goal.addGoal)
// admin
//router.get(API_V1+'accounts', Account.getAllAccounts) 

// Admin and user
//router.get(API_V1+'goals', verifyJWT.isAuth , Account.getAllAccountsUser);



module.exports = router;