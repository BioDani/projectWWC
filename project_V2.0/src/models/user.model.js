const mongoose = require('mongoose');

const userSchema = mongoose.Schema(
    {
        _id: {
            type: mongoose.Schema.Types.ObjectId,
            default: () => new mongoose.Types.ObjectId().toString(),
        },
        role: { type: String, require: true, enum: ['admin', 'user'] },
        name: { type: String, require: true },
        surname: { type: String, require: true },
        email: { type: String, require: true, unique: true },
        password: { type: String, require: true },
    },
    { versionKey: false }
);

const User = mongoose.model('user', userSchema);

module.exports = User;
