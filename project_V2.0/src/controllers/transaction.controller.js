const { Account, User } = require('../models');
const jwt = require('jsonwebtoken');

exports.addIncome = async (req, res) => {
    const { _id, transaction_value } = await req.body;

    const token = req.headers.authorization;
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET_KEY);

    email = decodedToken.email;
    const existingUserbyEmail = await User.findOne({ email });
    id_user = existingUserbyEmail._id;

    const account = await Account.find({ _id: _id });

    if ((account[0].id_user = id_user)) {
        const transaction = {
            initial_value: account[0].account_balance,
            transaction_value: transaction_value,
            account_balance: account[0].account_balance + transaction_value,
            date_transaction: new Date(),
        };


        new_balance = await Account.findOneAndUpdate(
            { _id: _id },
            {
                $set: {account_balance: transaction.account_balance},
                $push: {  account_transactions: transaction  }
            },
            {
                new: true,
            }
        );

        res.status(200).json({
            status: 200,
            message: new_balance,
        });
    }
};

exports.addExpense = async (req, res) => {
    const { _id, transaction_value } = await req.body;

    const token = req.headers.authorization;
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET_KEY);

    email = decodedToken.email;
    const existingUserbyEmail = await User.findOne({ email });
    id_user = existingUserbyEmail._id;

    const account = await Account.find({ _id: _id });

    if ((account[0].id_user = id_user)) {
        const transaction = {
            initial_value: account[0].account_balance,
            transaction_value: -transaction_value,
            account_balance: account[0].account_balance - transaction_value,
            date_transaction: new Date(),
        };

        new_balance = await Account.findOneAndUpdate(
            { _id: _id },
            {
                $set: {account_balance: transaction.account_balance},
                $push: {  account_transactions: transaction  }
            },
            {
                new: true,
            }
        );

        res.status(200).json({
            status: 200,
            message: new_balance,
        });
    }
};
