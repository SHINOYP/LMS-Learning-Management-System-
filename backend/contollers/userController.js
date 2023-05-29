const UserModel = require("../model/userModel");
const jwt = require("jsonwebtoken");
const cloudinary = require("../helper/cloudinary");
const userModel = require("../model/userModel");
var mongoose = require("mongoose");

//create token structure
const createToken = (_id) => {
  return jwt.sign({ _id: _id }, process.env.SECRET, { expiresIn: "24h" });
};

//login user

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await UserModel.login(email, password);

    //create token
    const token = createToken(user._id);
    const _id = user._id;
    const name = user.name;
    const avatar = user.avatar;
    const role = user.role;
    res.status(200).json({ name, avatar, _id, email, token, role });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//signup user

const signUpUser = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const user = await UserModel.signup(name, email, password);

    //create token
    const token = createToken(user._id);

    res.status(200).json({ email, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//update user profile
const updateProfile = async (req, res) => {
  const id = req.body._id;
  try {
    const result = await cloudinary.uploader.upload(req.file.path, {
      public_id: `${id}_profile`,
    });

    const user = await userModel.findByIdAndUpdate(
      { _id: id },
      {
        avatar: result.url,
      }
    );
    console.log(result.url);
    console.log("saved to db");
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getAllUsers = async (req, res) => {
  try {
    const users = await userModel.find({}).where({ role: "Student" });
    res.status(200).json(users);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  loginUser,
  signUpUser,
  updateProfile,
  getAllUsers,
};
