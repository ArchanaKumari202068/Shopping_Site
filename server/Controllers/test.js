const mongoose = require("mongoose");
const User = require("../Models/UserSchema");
const updateEmail = async (req, res) => {
  try {
    const id = req.body.id;
    const email = req.body.email;
    console.log("get updated data");
    console.log(id);
    console.log(email);
    let data = await User.findOneAndUpdate({ _id: id }, { email: email });
    console.log(data.id);
    res.send("get updated data");
    // console.log(data.email)
    // data = await User.findOne({id:id})
    // console.log(data.id)
  } catch (error) {
    console.log(error);
  }
};
module.exports = {
  updateEmail,
};
