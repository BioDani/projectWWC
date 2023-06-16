const { User } = require('../models');

const jwt = require('jsonwebtoken');

exports.isAdmin = async (req, res, next) => {
    
    try {
        const token = req.headers.authorization;

        const decodedToken = jwt.verify(token, process.env.JWT_SECRET_KEY);
        
        email = decodedToken.email;

        const existingUserbyEmail = await User.findOne({ email: email });

        if ( existingUserbyEmail.role == 'admin') {
            next();
        } else {
            throw new Error('without administrator permissions'); // Dispara una excepción
        }

    } catch (error) {
        res.status(401).json({
            status: 401,
            message: 'Unauthorized access',
        });
    }
};
