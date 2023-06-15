const  { User }  = require("../models");

exports.getAllUsers = async (_, res) => {
  try {
      const users = await User.find();
      res.status(200).json(users);
  } catch (error) {
      console.log(error);
  }
};

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
}