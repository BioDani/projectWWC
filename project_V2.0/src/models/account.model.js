const mongoose = require('mongoose');
//const users = require("./user.model")

const accountSchema = mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'users',
        },
        balance: { type: Number, require: true },
    },
    { versionKey: false }
);

const Account = mongoose.model('account', accountSchema);

module.exports = Account;
