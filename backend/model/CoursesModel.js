const mongoose =require('mongoose');

const Schema=mongoose.Schema

const CourseSchema=new Schema({
   name:{
    type:String,
    required:true
   },
   image:{
     data:Buffer,
     contentType:String
   }
    

},{timestamps:true})

module.exports=mongoose.model('CoursesMod',CourseSchema);