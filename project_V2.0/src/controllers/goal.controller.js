const { Account, User } = require('../models');
const jwt = require('jsonwebtoken');


exports.addGoal = async (req, res, next) => {
    try {
        const new_goal = await Goal.create(req.body);
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