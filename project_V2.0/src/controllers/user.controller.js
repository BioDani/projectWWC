const { User } = require('../models');

exports.getAllUsers = async (_, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        console.log(error);
    }
};

/* 
exports.addUser = async (req, res, next) => {
  try {
      const new_user = await User.create(req.body);
      res.status(200).json({
          status: 200,
          message: "New user was created.",
          user: new_user
      })
  } catch (error) {
      console.error(error.message)
      next(error);
  }
} */

exports.addUser = async (req, res, next) => {
    try {
        const { _id, role, name, surname, email, password } = await req.body;

        const existingUserbyEmail = await User.findOne({ email });
        
        if (existingUserbyEmail) {
            res.status(409).send({
                status: 409,
                message: 'Email is already registered',
            });
        }

        const new_user = await User.create(req.body);
        res.status(200).json({
            status: 200,
            message: "New user was created.",
            user: new_user
        })

    } catch (error) {}
};
