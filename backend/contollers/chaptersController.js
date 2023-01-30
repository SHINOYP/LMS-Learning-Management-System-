const Chapters=require('../model/chaptersModel');
const mongoose=require('mongoose');

      



// get all chapters
const getChapters=async(req,res)=>{
    const chapters=await Chapters.find({}).sort({createdAt:-1})

    res.status(200).json(chapters);
}



//get a single chapters  
const getchapter=async(req,res)=>{
    const {id}=req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'no such id'})
    }

    const chapters=await Chapters.findById(id)

    if(!chapters){
        return res.status(404).json({error:"no such workout"})
    }

    res.status(200).json(chapters)
}




//create new chapters
const createChapters= async (req,res)=>{
    const {title}=req.body

    try{
        const  chapters = await Chapters.create({title})
        res.status(200).json(chapters)
    }catch(err){
        console.log(err);

    }
    
}

//upload image





//update a  chapters

const updateChapter=async(req,res)=>{
    const {id}=req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'no such id'})
    }

    const chapters= await Chapters.findByIdAndUpdate({_id: id},{
      ...req.body
    })

    if(!chapters){
        return res.status(404).json({error:"no such workout"})
    }

    res.status(200).json(chapters)
}



//delete a chapters

const deleteChapter=async(req,res)=>{
    const {id}=req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'no such id'})
    }

    const chapters=await Chapters.findByIdAndDelete({_id: id})

    if(!chapters){
        return res.status(404).json({error:"no such workout"})
    }

    res.status(200).json(chapters)
}




module.exports={
    getChapters,
    getchapter,
    createChapters,
    deleteChapter,
    updateChapter
}