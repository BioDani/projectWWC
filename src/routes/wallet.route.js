const express = require("express");
const { Wallet } = require("../controllers");

const router = express.Router()

const BASE = "/api/v1/wallets";

router.get( BASE , Wallet.getAllWallets);

router.get(`${BASE}/:id`, Wallet.getWalletById);


module.exports = router;