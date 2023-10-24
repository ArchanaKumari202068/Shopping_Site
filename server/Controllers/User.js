const mongoose = require("mongoose");

const User = require("../Models/UserSchema");
// const users= require ('userData')
//Login
const LogInData = async (req, res) => {
  try {
    const user = User.req.body();
    console.log(user);

    // const UserList = await User.find();
    res.status(200).json(UserList);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
const SignUpData = async (req, res) => {
  try {
    res.status(200);
  } catch (err) {
    res.status(500);
  }
};
module.exports = { LogInData, SignUpData };
//SignUp
