let mongoose=require("mongoose");



mongoose.connect("mongodb://localhost/blog_demo");
// POST   --TİTLE AND CONTENT

let postSchema=new mongoose.Schema({
    title:String,
    content:String
    
});
let Post=mongoose.model("Post",postSchema); // MONGO COLLECTİON NAME COMES FROM HERE


//USER --- NAME AND EMAİL
let userSchema= new mongoose.Schema({
    email:String,
     name:String,
     posts:[postSchema]// POST SCHEMA SHOULD BE DEFİNED BEFORE
    
});
let User=mongoose.model("User",userSchema);




/*var NewUser= new User({
    email:"yhsnj@gmail.com",
    name:"deneme111"
});

NewUser.posts.push({
    title:"new associated",
    content:"bla bla bla anout nre rt"
    
});
NewUser.save((err,user)=>{
    if(err){
        console.log(err);
    }else{
        console.log(user);
    }
});

/*var newPost=new Post({
    title:"NEW POST",
    content:"some odd thing added to db"
})
newPost.save((err,postand)=>{
    if(err){
        console.log(err);
    }else{
        console.log(postand)
    }
})*/

User.findOne({name:"deneme111"},(err,user)=>{
    if(err){
        console.log(err);
    }else{
        user.posts.push({
            title:"berbat gümmm",
            content:"jschsdvsdkvjsdıovsdıhvsdhvudhvhyv"
        });
        user.save((err,user)=>{
            if(err){
                console.log(err)
            }else{
                console.log(user)
            }
        })
       
    }
})


