import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken"

export const signup = async (req, res) => {
  try {
    const { username, email, passwordHash } = req.body;
    if (!email || !passwordHash || !username) {
      res.status(500).json({ message: "All fields are required" });
    }
    if (passwordHash.lenght < 6) {
      es.status(400).json({
        message: "Password has to be at least 6 characters",
      });
    }
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      res.status(400).json({ message: "Email already exists" });
    }
    const hashP = 
    bcryptjs.hashSync(passwordHash, 10);

    const newUser = new User({username,email,passwordHash:hashP})
    
    const savedUser = await newUser.save()

    // res.status(201).json(savedUser)

    // log user in
    const token = jwt.sign({
      user: savedUser._id
    }, process.env.JWT_SECRET)

    res.cookie("token", token, {
      httpOnly:true,
    }).send()
  } catch (error) {
    console.error(error);
    res.status(500).send();
  }
};
