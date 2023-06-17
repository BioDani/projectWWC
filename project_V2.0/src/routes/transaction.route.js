const express = require("express");
const { Transaction } = require("../controllers");
const {verifyJWT  } = require("../middlewares");

const router = express.Router()
const API_V1 = "/api/v1/";


router.post(API_V1+'income', verifyJWT.isAuth ,Transaction.addIncome);
router.post(API_V1+'expense',  verifyJWT.isAuth,Transaction.addExpense);

module.exports = router;
