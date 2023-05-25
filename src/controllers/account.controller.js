const { Account } = require("../models");

exports.getAllAccounts = async (_, res) => {
    try {
        const account = await Account.find();
        res.status(200).json(account);
    } catch (error) {
        print(error);
    }
}


exports.getAccountById = async (req, res) => {
    try {
        const { id } = req.params;
        const account = await Account.findById(id);
        if (!account) {
            res.status(404).json({
                status: 404,
                message: `The account was not found.`,
            })
        } else {
            res.status(200).json({
                status: 200,
                message: `The account '${id}' was found.`,
                account: account
            });
        }
    } catch (error) {
        return error;
    }
}

exports.addAccount = async (req, res, next) => {
    try {
        const account = req.body;
        const new_account = await Account.create(account);
        res.status(200).json({
            status: 200,
            message: "A new account was created.",
            account: new_account
        });
    } catch (error) {
        next(error);
    }
}



