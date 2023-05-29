const express = require("express");

//controller fundtions

const {
  loginUser,
  signUpUser,
  updateProfile,
  getAllUsers,
} = require("../contollers/userController");
const { upload } = require("../helper/filehelper");

const router = express.Router();

//login route
router.post("/login", loginUser);

//signup route
router.post("/signup", signUpUser);

router.get("/all-users", getAllUsers);

router.post("/Profile", upload.single("avatar"), updateProfile);

module.exports = router;
