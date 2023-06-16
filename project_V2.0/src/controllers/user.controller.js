const bcrypt = require('bcrypt');
const { User } = require('../models');

const saltRounds = 10;

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
        //const newUser = await req.body;
        const { _id, role, name, surname, email, password } = await req.body;

        const existingUserbyEmail = await User.findOne( {email});

        if (existingUserbyEmail) {
            res.status(409).send({
                status: 409,
                message: 'Email is already registered',
            });
        }


        
        const hash = bcrypt.hashSync( password , saltRounds);
        //console.log(hash);
        //console.log(bcrypt.compareSync( password, hash));

        const user = {
            "_id": _id,
            "role": role,
            "name": name,
            "surname": surname,
            "email": email,
            "password": hash
        }

/*         res.status(200).json({
            status: 200, 
            newUser: newUser
        }); */

        const new_user = await User.create(user);
        res.status(200).json({
            status: 200,
            message: "New user was created.",
            user: new_user
        })
    } catch (error) {}
};
