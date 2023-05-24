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
                message: "product not found",
            })
        } else {
            res.status(200).json({
                status: 200,
                message: "product found",
                wallet: wallet
            });
        }
    } catch (error) {
        print(error);
    }
}
/*
exports.getWalletById = async (req, res) => {
    const { id } = req.params;
    try {
        const wallet = await Wallet.find({ _id : id });

        if ( wallet.length == 0){
            res.status(404).json(
                {
                    status: 404,
                    message: `Wallet not found.`
                }
                )
        } else {
            res.status(200).json(
                {
                status: 200,
                message: `Wallet found.`,
                wallet: wallet
            });
        }

    } catch (error) {
        print(error);
    }
}


/*const { id } = req.params;
    try {
        const product = await Product.find({ _id: id });
        if (Product.length == 0) {
            res.status(404).json({
                status: 404,
                message: "product not found",
            })
        } else {
            res.status(200).json({
                status: 200,
                message: "product found",
                product: product
            });
        }
    } catch (error) {
        next(error);
    }
}

exports.addNewProduct = async (req, res, next) => {
    const product = req.body;

    try {
        const resp = await Product.create(product);
        res.status(200).json({
            status: 200,
            message: "product was created",
            product: resp
        });
    } catch (error) {
        next(error);
    }
}

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