const mongoose = require('mongoose');

const transactionSchema = mongoose.Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        default: () => new mongoose.Types.ObjectId().toString(),
    },
    initial_value: { type: Number},
    transaction_value: { type: Number},
    account_balance: { type: Number},
    date_transaction: { type: Date},
});

const accountSchema = mongoose.Schema(
    {
        _id: {
            type: mongoose.Schema.Types.ObjectId,
            default: () => new mongoose.Types.ObjectId().toString(),
        },
        id_user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'users',
        },
        account_name: { type: String, require: true, minLength: 2, maxLength: 20 },
        account_type: { type: String, require: true, minLength: 2, maxLength: 20 },
        account_balance: { type: Number},
        account_currency: { type: String, require: true, minLength: 2, maxLength: 20 },
        account_transactions: [transactionSchema]
    },
    {
        versionKey: false,
    }
);


const Account = mongoose.model('account', accountSchema);

module.exports = Account;
