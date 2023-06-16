const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { User } = require('../models');

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const existingUserbyEmail = await User.findOne({ email }).exec();


        if (!existingUserbyEmail)
            return res.status(401).json({
                status: 401,
                message: 'Incorrect',
            });

        const checkPassword = await bcrypt.compareSync(
            password,
            existingUserbyEmail.password
        );


        if (!checkPassword)
            return res.status(401).json({
                status: 401,
                message: 'The provided email or password are not correct.',
            });

        token = await jwt.sign(
            { email, password },
            process.env.JWT_SECRET_KEY,
            { expiresIn: '1d' }
        );

        return res.status(200).json({
            success: true,
            token: token
        });
    
      } catch (error) {
        return error;
    }
};

exports.restrictedView = (_, res) => {
    res.status(200).send('Confidential View');
};
