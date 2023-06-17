const Joi = require('joi');

const id_user = Joi.string()
const goal_name = Joi.string()
const goal_balance = Joi.number()
const goal_targetAmount = Joi.number()
const goal_fulfilment = Joi.number()
const amount = Joi.number()
const date = Joi.date()

const addAccountValidate = Joi.object({
    id_user: id_user.required(),
    goal_name: goal_name.min(2).max(20).required(),
    goal_balance: goal_balance.required(),
    goal_targetAmount: goal_targetAmount.required(),
    goal_fulfilment: goal_fulfilment,
    amount: amount,
    date: date,

});

module.exports = {
    addGoalValidate
}