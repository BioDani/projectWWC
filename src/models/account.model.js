const mongoose = require("mongoose");

const accountSchema = mongoose.Schema({
    user: { type: String, required: true },
    accountType: { type: String, required: false },
    name: { type: String, required: true },
    description: { type: String, required: false },
    currency: { type: String, required: true },
    balance: { type: Number, required: true }
},
{ versionKey: false }
);

const Account = mongoose.model("account", accountSchema);

module.exports = Account;
