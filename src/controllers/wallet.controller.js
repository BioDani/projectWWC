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

 /*
exports.updateProduct = async (req, res, next) => {
    const { id } = req.params;
    const updateProduct = req.body;
    try {
        const product = await Product.findOneAndUpdate({ _id: id }, { $set: { ...updateProduct } });
        if (product == null) {
            res.status(404).json({
                status: 404,
                message: "product not found",
            })
        } else {
            res.status(200).json({
                status: 200,
                message: "Product was updated",
                product: product,
                update: updateProduct
            })
        }
    } catch (error) {
        next(error);
    }
}

exports.deleteProduct = async (req, res, next) => {
    const { id } = req.params;
    try {
        const product = await Product.findOneAndDelete({ _id: id });
        if (product == null) {
            res.status(404).json({
                status: 404,
                message: "product not found",
            })
        } else {
            res.status(200).json({
                status: 200,
                message: "product was deleted",
                product: product
            })
        }
    } catch (error) {
        next(error);
    }
} */