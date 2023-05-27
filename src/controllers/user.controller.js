const { User } = require('../models')

exports.getAllUsers = async (req, res, next) => {
    const {offset = 0, limit = 10} = req.query;
    try {
      const users = await User.findAll({
        offset,
        limit
      });
      res.status(200).json({
        status: 200,
        data: users
      });
  
    } catch (error) {
      next(error);
  
    };
  };

  exports.addUser = async (req, res, next) => {
    try {
        const new_user = await User.create(req.body);
        res.status(200).json({
            status: 200,
            message: "New account was created.",
            user: new_user
        })
    } catch (error) {
        console.error(error.message)
        next(error);
    }
}