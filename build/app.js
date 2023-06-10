"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
require("dotenv").config(); // to use enviroment variables
const express = require('express');
const { mongoose } = require("mongoose");
const sequelize = require('./utils/postgresql.config');
const { authMiddleware } = require('./middlewares');
// Enviroment variables
const PORT = process.env.PORT;
const MONGODB_CONNECTION = process.env.MONGODB_CONNECTION;
const app = express();
const { Login, Account, User } = require("./routes");
app.use(express.json());
app.use("/", Account);
app.use("/", User);
app.use("/", Login);
app.use(authMiddleware.isAuth);
const startApp = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield app.listen(PORT, () => {
            console.log(`App running in http://localhost:${PORT}`);
        });
    }
    catch (error) {
        console.error(error);
        process.exit(1);
    }
    try {
        yield mongoose.connect(MONGODB_CONNECTION, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Connection has been established successfully to Cluster of MongoDB Atlas.');
    }
    catch (error) {
        console.error('Unable to connect to the database:', error);
    }
    ;
    try {
        yield sequelize.authenticate();
        yield sequelize.sync();
        console.log('Connection has been established successfully to postgreSQL database.');
    }
    catch (error) {
    }
});
startApp();
