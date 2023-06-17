const { Account, User, Goal } = require('../models');
const jwt = require('jsonwebtoken');

exports.addGoal = async (req, res, next) => {
    try {
        const { id_user, goal_name, goal_balance, goal_targetAmount } =
            req.body;

        const goal = {
            id_user: id_user,
            goal_name: goal_name,
            goal_balance: goal_balance,
            goal_targetAmount: goal_targetAmount,
            goal_fulfilment: (goal_balance * 100) / goal_targetAmount,
            payment: [],
        };
        const new_goal = await Goal.create(goal);
        res.status(200).json({
            status: 200,
            message: 'New goal was created.',
            user: new_goal,
        });
    } catch (error) {
        console.error(error.message);
        next(error);
    }
};

exports.addPayment = async (req, res) => {
    const { _id, amount } = await req.body;

    const token = req.headers.authorization;
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET_KEY);

    email = decodedToken.email;
    const existingUserbyEmail = await User.findOne({ email });
    id_user = existingUserbyEmail._id;

    const goal = await Goal.find({ _id: _id });

    if ((goal[0].id_user = id_user)) {
        new_payment = await Goal.findOneAndUpdate(
            { _id: _id },
            {
                $set: {
                    goal_balance: goal[0].goal_balance + amount,
                    goal_fulfilment:
                        ((goal[0].goal_balance + amount) * 100) /
                        goal[0].goal_targetAmount,
                },
                $push: { payment: { amount: amount } },
            },
            {
                new: true,
            }
        );

        res.status(200).json({
            status: 200,
            goal: new_payment,
        });
    }
};
