const express=require('express')


//controller fundtions

const { loginUser,
        signUpUser,
        updateProfile} = require('../contollers/userController')
const{upload}=require('../helper/filehelper')

const router =express.Router()





//login route
router.post('/login',loginUser)


//signup route
router.post('/signup',signUpUser)


router.post("/Profile", upload.single('avatar'),updateProfile)

module.exports=router