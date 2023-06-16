const { Account, User } = require('../models');
const jwt = require('jsonwebtoken');

// Admin
exports.getAllAccounts = async (_, res) => {
    try {
        const accounts = await Account.find();
        res.status(200).json(accounts);
    } catch (error) {
        console.log(error);
    }
};

// Admin y user
exports.getAllAccountsUser = async (req, res) => {
    const token = req.headers.authorization;

    const decodedToken = jwt.verify(token, process.env.JWT_SECRET_KEY);

    email = decodedToken.email;

    const existingUserbyEmail = await User.findOne({ email: email });

    if (existingUserbyEmail.role == 'admin') {
        const accounts = await Account.find();
        res.status(200).json(accounts);

    } else {
        id_user = existingUserbyEmail._id;
        const userAccounts = await Account.find({ id_user: id_user });

        res.status(200).json({
            status: 200,
            id_user: existingUserbyEmail._id,
            user_name: existingUserbyEmail.name,
            user_surname: existingUserbyEmail.surname,
            accounts_number: userAccounts.length,
            accounts: userAccounts,
        });
    }
};

// Admin and user
exports.addAccount = async (req, res, next) => {
    try {
        const new_account = await Account.create(req.body);
        res.status(200).json({
            status: 200,
            message: 'New account was created.',
            user: new_account,
        });
    } catch (error) {
        console.error(error.message);
        next(error);
    }
};
