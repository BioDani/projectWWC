const jwt = require("jsonwebtoken");

exports.login = async (req, res) => {
  try {
    const { email } = req.body; 
    token = await jwt.sign({ email }, 
      process.env.JWT_SECRET_KEY, 
      { expiresIn: "1d" }
      )
    
    return res.status(200).json({
        success: true,
        token : token 
      });

    } catch (error) {
      return error;
  }
}

exports.restrictedView = (_, res) => {
  res.status(200)
    .send("Confidential View")
}