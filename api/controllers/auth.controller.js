import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

// register
export const signup = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    if (!email || !password || !username) {
      res.status(500).json({ message: "All fields are required" });
    }
    if (password.length < 6) {
      es.status(400).json({
        message: "Password has to be at least 6 characters",
      });
    }
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      res.status(400).json({ message: "Email already exists" });
    }
    const hashP = bcryptjs.hashSync(password, 10);

    const newUser = new User({ username, email, password: hashP });

    const savedUser = await newUser.save();


    // sign the token
    const token = jwt.sign(
      {
        user: savedUser._id,
      },
      process.env.JWT_SECRET
    );

    res
      .cookie("token", token, {
        httpOnly: true,
      })
      .send();
  } catch (error) {
    console.error(error);
    res.status(500).send();
  }
};

// login
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      res.status(500).json({ message: "All fields are required" });
    }
    const existingUser = await User.findOne({ email });
    if (!existingUser)
      return res.status(401).json({ message: "Wrong email or password" });

    const correctPass = await bcryptjs.compare(password, existingUser.password);
    if (!correctPass)
      return res.status(401).json({ message: "Wrong email or passwor" });

      // sign the token
      const token = jwt.sign(
        {
          user: existingUser._id,
        },
        process.env.JWT_SECRET
      );
  
      res
        .cookie("token", token, {
          httpOnly: true,
        })
        .send();
  } catch (error) {}
};

export const logout = async (req,res)=>{
  res.cookie("token", "", {
    httpOnly:true,
    expires: new Date(0)
  }).send()
}

// logged in check
export const loggedIn= async(req, res)=> {
  /* frontend check if im logged by sending token to the server 
     we do this because server is http only, so we make http req to the server
  */
  try {
    const token = req.cookies.token;

    // check if token exists
    if(!token) return res.json(false);

    res.send(true)
  } catch (error) {
    console.error(error);
    res.json(false);
  }
}
