import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";

export const signup = async (req, res) => {
  try {
    const { username, email, passwordHash } = req.body;
    if (!email || !passwordHash || !username) {
      res.status(500).json({ message: "All fields are required" });
    }
    if (passwordHash.length < 6) {
      es.status(400).json({
        message: "Password has to be at least 6 characters",
      });
    }
    const existingUser = awaitUser.findOne({ email });
    if (existingUser) {
      res.status(400).json({ message: "Email already exists" });
    }
    const salt = bcryptjs.genSalt()
    const hashP = bcryptjs.hashSync(passwordHash, salt);

    const newUser = new User({username,email,passwordHash:hashP})
    
    const savedUser = await newUser.save()

    res.status(201).json({message:"User created", savedUser})
  } catch (error) {
    console.error(error);
    res.status(500).send();
  }
};
