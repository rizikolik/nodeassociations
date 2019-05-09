let mongoose=require("mongoose");
mongoose.connect("mongodb://localhost/blog_demo_2");

let Post=require("./models/post");
let User=require("./models/user")


// POST   --TİTLE AND CONTENT



//USER --- NAME AND EMAİL


/*User.create({
    email:"gadged@gail.com",
    name:"gadged"
});*/
//HARD PART

/*Post.create({
    title:"object refarances and module export trials",
    content:"we always have to be write clean code . Thats important"
},(err,post)=>{
   User.findOne({email:"gadged@gail.com"},(err,founduser)=>{
       if(err){
           console.log(err);
       }else{
           founduser.posts.push(post);
           founduser.save((err,data)=>{
               if(err){
                   console.log(err);
               }else {
                   console.log(data);
               }
           })
       }
   });
});*/
  
User.findOne({email:"gadged@gail.com"}).populate("posts").exec((err,user)=>{
    if(err){
        console.log(err);
    }else{
        console.log(user);
    }
}
);



