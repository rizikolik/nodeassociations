let mongoose=require("mongoose");


let postSchema=new mongoose.Schema({
    title:String,
    content:String
});
module.exports= mongoose.model("Post",postSchema); // MONGO COLLECTİON NAME COMES FROM HERE