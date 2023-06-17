const mongoose = require('mongoose');

const goalSchema = mongoose.Schema(
    {
        _id: {
            type: mongoose.Schema.Types.ObjectId,
            default: () => new mongoose.Types.ObjectId().toString(),
        },
        id_user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'users',
        },
        goal_name: {
            type: String,
            required: true,
            minlength: 2,
            maxlength: 50,
        },
        goal_balance: {
            type: Number,
            default: 0,
        },
        goal_targetAmount: {
            type: Number,
            required: true,
            min: 0,
        },
        goal_fulfilment: {
            type: Number,
            min: 0,
        },
        payment: [
            {
                amount: {
                    type: Number,
                    required: true,
                    min: 0,
                },
                date: {
                    type: Date,
                    default: Date.now,
                },
            },
        ],
    },
    {
        versionKey: false,
    }
);

const Goal = mongoose.model('goal', goalSchema);

module.exports = Goal;
