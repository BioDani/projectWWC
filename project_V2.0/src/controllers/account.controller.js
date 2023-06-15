const  { Account }  = require("../models");

// Admin
exports.getAllAccounts = async (_, res) => {
  try {
      const accounts = await Account.find();
      res.status(200).json(accounts);
  } catch (error) {
      console.log(error);
  }
}


// Admin and user
exports.addAccount = async (req, res, next) => {
  try {
      const new_account = await Account.create(req.body);
      res.status(200).json({
          status: 200,
          message: "New account was created.",
          user: new_account 
      })
  } catch (error) {
      console.error(error.message)
      next(error);
  }
}