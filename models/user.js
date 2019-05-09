let mongoose=require("mongoose");

let userSchema= new mongoose.Schema({
    email:String,
     name:String,
     posts:[
         {
             type:mongoose.Schema.Types.ObjectId,
             ref:"Post"// POST SCHEMA SHOULD BE DEFİNED BEFORE!!!!! ///////
         }]
         });
module.exports= mongoose.model("User",userSchema);