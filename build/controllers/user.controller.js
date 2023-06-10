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
const { User } = require('../models');
exports.getAllUsers = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { offset = 0, limit = 10 } = req.query;
    try {
        const users = yield User.findAll({
            offset,
            limit
        });
        res.status(200).json({
            status: 200,
            data: users
        });
    }
    catch (error) {
        next(error);
    }
    ;
});
exports.addUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const new_user = yield User.create(req.body);
        res.status(200).json({
            status: 200,
            message: "New account was created.",
            user: new_user
        });
    }
    catch (error) {
        console.error(error.message);
        next(error);
    }
});
