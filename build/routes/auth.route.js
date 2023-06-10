"use strict";
const express = require('express');
const { Auth } = require('../controllers');
const { authMiddleware } = require('../middlewares');
const router = express.Router();
const BASE = "/api/v1";
router.post(`${BASE}/login`, Auth.login);
router.get(`${BASE}/auth/confidential`, authMiddleware.isAuth, Auth.restrictedView);
module.exports = router;
