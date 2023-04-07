const mongoose = require("mongoose")

const todoSchema = new mongoose.Schema({
  text: {
    type: String,
    require: true
  },
  user_id:{
    type:String,
    require:true
  }
})

module.exports = mongoose.model("ToDo", todoSchema)