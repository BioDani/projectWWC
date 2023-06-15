const Joi = require('joi');

const id_user = Joi.string()
const account_name = Joi.string()
const account_type = Joi.string()
const account_balance = Joi.number()
const account_currency = Joi.string()
const account_transactions = Joi.array()

const addAccountValidate = Joi.object({
    id_user: id_user.required(),
    account_name: account_name.min(2).max(20).required(),
    account_type: account_type.min(2).max(20).required(),
    account_balance: account_balance,
    account_currency: account_currency.min(2).max(5).required(),
    account_transactions: account_transactions
});

module.exports = {
    addAccountValidate
}