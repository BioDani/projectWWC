const express = require("express");
const { Account } = require("../controllers");

const router = express.Router()

const BASE = "/api/v1/accounts";

router.get( BASE , Account.getAllAccounts);

router.get(`${BASE}/:id`, Account.getAccountById);

router.post(BASE, Account.addAccount); 

module.exports = router;