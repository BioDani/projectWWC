const express = require("express");
const { Account } = require("../controllers");

const router = express.Router()
const API_V1 = "/api/v1/";

router.get(API_V1+'accounts', Account.getAllAccounts)
router.post(API_V1+'newAccount', Account.addAccount)

module.exports = router;