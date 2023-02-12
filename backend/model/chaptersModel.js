const mongoose =require('mongoose');

const Schema=mongoose.Schema

const chaptersSchema=new Schema({
    title:{
        type:String,
        required:true
    },
   units:[
    { 
        type:String,
        required:true
    }
   ]   

},{timestamps:true})

module.exports=mongoose.model('chapters',chaptersSchema);