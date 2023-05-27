const express = require('express');
const { login, restrictedView } = require('../controllers')
const  isAuth = require('../middlewares');

const router = express.Router();

const BASE = "/api/v1";

router.post(`${BASE}/login`, login);

router.get(`${BASE}/auth/confidential`, isAuth, restrictedView);

module.exports = router;