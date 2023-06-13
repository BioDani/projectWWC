"use strict";
const express = require("express");
const { User } = require("../controllers");
const router = express.Router();
const BASE = "/api/v1/users";
router.get(BASE, User.getAllUsers);
router.post(BASE, User.addUser);
module.exports = router;
