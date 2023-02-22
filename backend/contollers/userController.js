const UserModel=require('../model/userModel')
const jwt=require('jsonwebtoken')


//create token structure
const createToken = (_id)=>{
    return jwt.sign({_id:_id},process.env.SECRET,{expiresIn:'24h'})

}


//login user

const loginUser = async(req,res)=>{
    const {email,password}=req.body
    try{
        const user=await UserModel.login(email,password)


        //create token  
        const token=createToken(user._id)

        res.status(200).json({email,token})
    }catch(error){
        res.status(400).json({error:error.message})
    }
}



//signup user

const signUpUser = async(req,res)=>{
    const {name,email,password}=req.body

    try{
        const user=await UserModel.signup(name,email,password)


        //create token  
        const token=createToken(user._id)

        res.status(200).json({email,token})
    }catch(error){
        res.status(400).json({error:error.message})
    }
}


module.exports={
    loginUser,
    signUpUser
}