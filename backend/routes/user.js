const express=require('express')

//controller fundtions

const { loginUser,
    signUpUser}= require('../contollers/userController')



const router =express.Router()

//login route
router.post('/login',loginUser)


//signup route
router.post('/signup',signUpUser)

module.exports=router