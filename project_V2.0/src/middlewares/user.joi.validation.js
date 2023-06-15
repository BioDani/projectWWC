const Joi = require('joi');

const role = Joi.string()
const name = Joi.string()
const surname = Joi.string()
const email = Joi.string()
const password = Joi.string()

const addUserValidate = Joi.object({
    role: role.valid('admin','user').required(),
    name: name.alphanum().min(3).max(30).required(),
    surname: name.alphanum().min(3).max(30).required(),
    email: email.email(),
    password: password.alphanum().min(8).pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?!.*\s).*$/).required()
});

module.exports = {
    addUserValidate
}