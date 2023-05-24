const mongoose = require("mongoose");

const walletSchema = mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: false },
    category: { type: String, required: true },
    balance: { type: Number, required: true }
});

const Wallet = mongoose.model("Wallet", walletSchema);

module.exports = Wallet;

/* 
1er Wallet: hace referencia al objeto de js que usa el esquema de walletSchema.
2do Wallet: hace referencia a la tabla que se creará en mongodb.
*/