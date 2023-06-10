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
const { Account } = require("../models");
//const { count } = require("../models/wallet.model");
// Get all the accounts
exports.getAllAccounts = (_, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const account = yield Account.find();
        res.status(200).json(account);
    }
    catch (error) {
        print(error);
    }
});
// Get the accounts using the Id
exports.getAccountById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const account = yield Account.findById(id);
        if (!account) {
            res.status(404).json({
                status: 404,
                message: `The account was not found.`,
            });
        }
        else {
            res.status(200).json({
                status: 200,
                message: `The account '${id}' was found.`,
                account: account
            });
        }
    }
    catch (error) {
        return error;
    }
});
// Create a new account
exports.addAccount = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const account = req.body;
        const new_account = yield Account.create(account);
        res.status(200).json({
            status: 200,
            message: "New account was created.",
            account: new_account
        });
    }
    catch (error) {
        return error;
    }
});
// Update an account using its Id
exports.updateAccount = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const account = req.body;
        const updated_account = yield Account.findByIdAndUpdate(id, account, { new: true });
        if (!updated_account) {
            res.status(404).json({
                status: 404,
                message: `The account was not found.`,
            });
        }
        else {
            res.status(200).json({
                status: 200,
                message: "The account was updated.",
                account: updated_account
            });
        }
    }
    catch (error) {
        return error;
    }
});
// Delete an account using its Id
exports.deleteAccount = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const deleted_account = yield Account.findOneAndDelete({ _id: id });
        if (!deleted_account) {
            res.status(404).json({
                status: 404,
                message: `The account was not found.`
            });
        }
        else {
            res.status(200).json({
                status: 200,
                message: "The account was deleted.",
                account: deleted_account
            });
        }
    }
    catch (error) {
        return error;
    }
});
