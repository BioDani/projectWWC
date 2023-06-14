const  { User }  = require("../models");

exports.getAllUsers = async (_, res) => {
  try {
      const users = await User.find();
      res.status(200).json(users);
  } catch (error) {
      console.log(error);
  }
};