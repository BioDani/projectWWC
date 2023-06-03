const express = require('express');
const { Auth} = require('../controllers')
const { authMiddleware } = require('../middlewares');

const path = require('path');

const router = express.Router();

const BASE = "/api/v1";

router.post(`${BASE}/login`, Auth.login);

router.get(`${BASE}/auth/confidential`, authMiddleware.isAuth , Auth.restrictedView);


router.get("/login", (req, res) => {
    res.sendFile(path.resolve("src/views/login.html"));
});

router.get("/playground", (req, res) => {
    res.sendFile(path.resolve("src/views/playground.html"));
});

module.exports = router;


