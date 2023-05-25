const { Wallet } = require("../models");

exports.getAllWallets = async (_, res) => {
    try {
        const wallets = await Wallet.find();
        res.status(200).json(wallets);
    } catch (error) {
        print(error);
    }
}

exports.getWalletById = async (req, res) => {
    try {
        const { id } = req.params;
        const wallet = await Wallet.findById(id);
        if (!wallet) {
            res.status(404).json({
                status: 404,
                message: `The wallet was not found.`,
            })
        } else {
            res.status(200).json({
                status: 200,
                message: `The wallet '${wallet.id}' was found.`,
                wallet: wallet
            });
        }
    } catch (error) {
        return error;
    }
}

exports.addWallet = async (req, res, next) => {
    try {
        const wallet = req.body;
        const new_wallet = await Wallet.create(wallet);
        res.status(200).json({
            status: 200,
            message: "A new wallet was created.",
            wallet: new_wallet
        });
    } catch (error) {
        next(error);
    }
}
