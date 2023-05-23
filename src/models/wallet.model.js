const mongoose = require("mongoose");

const walletSchema = mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: false },
    category: { type: String, required: true },
    balance: { type: Number, required: true }
});


exports.Wallet = mongoose.model("wallet", walletSchema);

/* 
Wallet: hace referencia al objeto de js que usa el esquema de walletSchema.
wallet: hace referencia a la tabla que se creará en mongodb.
*/


