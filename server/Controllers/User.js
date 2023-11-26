const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const User = require("../Models/UserSchema");

//Login function
//JWT authentication

//function to create a token
const createToken = (id) => {
  console.log("Inside the token", id);
  let x = jwt.sign({ id }, process.env.SECRETE_KEY, {
    expiresIn: 120000,
  });
  console.log("Token: ", x);
  return x;
};

const LogInData = async (req, res) => {
  try {
    const user = req.body;
    console.log(user);
    res.status(200);
    //check if the Email and Pasword is correct or not
    const existingUser = await User.findOne({
      Email: req.body.Email,
      Password: req.body.Password,
    });
    if (!existingUser) {
      return res.status(400).send({ msg: "Usernot found" });
    }

    //login token

    const logintoken = createToken(String(existingUser._id));
    console.log("logintoken: ", logintoken);
    res.status(200).send({ msg: "User login successfully", logintoken });

    // console.log(existingUser);
    // if (existingUser) {
    //   return res
    //     .status(200)
    //     .send({ message: " Successfully Login with your Email and password" });
    // } else {
    //   //else user need to first create an account then login
    //   return res.status(400).send({
    //     message: "Do not have account , Create an account",
    //   });
    // }

    //check Email and password is matched with the existinguser details then able to login
  } catch (err) {
    res.status(500).json({ message: err.message });
  }

  // jwt.sign(user,process.env.ACCESS_TOKEN_SECRET)
};

//SignUp function
const SignUpData = async (req, res) => {
  try {
    console.log("Creating the user...");
    const SignUpData = req.body;
    console.log("check 1", SignUpData);

    // res.status(200).send({ token });

    //check if user is already exist or not
    const existingUser = await User.findOne({ Email: SignUpData.Email });
    console.log("User", existingUser);
    if (existingUser) {
      return res.status(400).send({ message: "Email already exist" });
    }

    console.log(SignUpData);

    var user_data = new User({
      //signUpData = req.body , so i can use SignUpDta instead of req.bosy ex= Name: req.body.Name,
      Name: SignUpData.Name,
      Password: SignUpData.Password,
      Email: SignUpData.Email,
    });
    user_data.save();

    console.log(user_data._id);

    const token = createToken(String(user_data._id));

    console.log("token in signup funciton", token);
    res
      .status(200)
      .send({ message: "User created successfully.", token: token });
  } catch (err) {
    console.log(err);
    res.status(500);
  }
};

const authenticateUser = (req, res) => {
  const token = req.body.token;
  try {
    if (token) {
      // Verify the token using jwt.verify method
      const decode = jwt.verify(token, process.env.SECRETE_KEY);
      console.log(decode);
      res.send(decode);
    }
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server Error");
  }
};

// user_data.save()
module.exports = { LogInData, SignUpData, authenticateUser };
