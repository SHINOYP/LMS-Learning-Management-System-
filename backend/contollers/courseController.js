const Chapters=require('../model/chaptersModel');
const mongoose=require('mongoose');




//create a single module 
const createModule = async(req,res)=>{
    const {_id,units}=req.body

    try{
        
        const chapters=await Chapters.updateOne({ _id: _id }, { $push: { units: units } } )
        res.status(200).json(units)

    }catch(err){
        console.log(err)

    }
}



module.exports={
    createModule
}
