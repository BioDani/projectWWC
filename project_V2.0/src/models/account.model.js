const mongoose = require('mongoose');
//const users = require("./user.model")

const accountSchema = mongoose.Schema(
    {
        id_user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'users',
        },
        account_id: {},
        account_name: {},
        account_type: {},
        account_balance: {},
        account_currency: {},
        account_transactions: [
            {
                
            }
        ]
    },
    {
        versionKey: false,
    }
);

const Account = mongoose.model('account', accountSchema);

module.exports = Account;
