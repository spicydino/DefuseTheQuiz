const bcrypt = require('bcryptjs');
const userModel = require('../models/User');

const signupController = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    
    const existingUser = await userModel.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ error: 'Email already in use' });
    }

    
    const hashedPassword = await bcrypt.hash(password, 10);

    
    const newUser = new userModel({
      username: name,
      email,
      password: hashedPassword,
      Score:0
    });

    
    await newUser.save();

    
    return res.status(201).json({ success: 'User registered successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
};

module.exports = signupController;
