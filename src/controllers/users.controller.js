const {validateUserData} = require('express-validator');  

const registerUser = (req, res) => {
  const errors = validateUserData(req.body);

  if(!errors.isEmpty()) {
    return res.status(400).json({errors: errors.array()});
  }

  const {email, password} = req.body;

  res.status(201).json({message: `User registered with email: ${email}`});
}

module.exports = {
  registerUser
};