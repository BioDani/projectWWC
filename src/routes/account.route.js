const express = require("express");
const { Account } = require("../controllers");

const router = express.Router()

const BASE = "/api/v1/accounts";

router.get( BASE , Account.getAllAccounts);

router.get(`${BASE}/:id`, Account.getAccountById);

router.post(BASE, Account.addAccount);

router.patch(`${BASE}/:id`, Account.updateAccount)

router.delete(`${BASE}/:id`, Account.deleteAccount)

module.exports = router;