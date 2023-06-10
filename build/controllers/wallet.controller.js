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
const { Wallet } = require("../models");
exports.getAllWallets = (_, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const wallets = yield Wallet.find();
        res.status(200).json(wallets);
    }
    catch (error) {
        print(error);
    }
});
exports.getWalletById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const wallet = yield Wallet.findById(id);
        if (!wallet) {
            res.status(404).json({
                status: 404,
                message: `The wallet was not found.`,
            });
        }
        else {
            res.status(200).json({
                status: 200,
                message: `The wallet '${wallet.id}' was found.`,
                wallet: wallet
            });
        }
    }
    catch (error) {
        return error;
    }
});
exports.addWallet = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const wallet = req.body;
        const new_wallet = yield Wallet.create(wallet);
        res.status(200).json({
            status: 200,
            message: "A new wallet was created.",
            wallet: new_wallet
        });
    }
    catch (error) {
        next(error);
    }
});
