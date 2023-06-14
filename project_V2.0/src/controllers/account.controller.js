const  { Account }  = require("../models");

exports.getAllAccounts = async (_, res) => {
  try {
      const accounts = await Account.find();
      res.status(200).json(accounts);
  } catch (error) {
      console.log(error);
  }
}