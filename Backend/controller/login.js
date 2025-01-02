const bcrypt = require("bcryptjs");
const userModel = require("../models/User");

const loginController = async (req, res) => {
  try {
    console.log("Request body:", req.body); 

    const { email, password } = req.body;

    
    const user = await userModel.findOne({ email });
    console.log("User found:", user); 

    if (!user) {
      console.log("User not found"); 
      return res.status(400).json({ error: "Invalid email or password" });
    }

    
    const isPasswordValid = await bcrypt.compare(password, user.password);
    console.log("Password valid:", isPasswordValid); 

    if (!isPasswordValid) {
      console.log("Password does not match"); 
      return res.status(400).json({ error: "Invalid email or password" });
    }

    
    console.log("Login successful for user:", user.username); 
    return res.status(200).json({
      success: "Login successful",
      user: {
        id: user._id,
        email: user.email,
        username: user.username,
      },
    });
  } catch (error) {
    console.error("Error during login:", error); 
    return res.status(500).json({ error: "Server error" });
  }
};

module.exports = loginController;
