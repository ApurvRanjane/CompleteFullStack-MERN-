const express=require("express");
const app=express();
const port=8080;
const path=require("path");
const Chat=require("./models/chat.js")
const methodOverride=require("method-override");
const ExpressError=require("./ExpressError")

app.set("views",path.join(__dirname,"views"));
app.set("view engine","ejs");
app.use(express.static(path.join(__dirname,"public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride("_method"));

const mongoose = require('mongoose');
const { nextTick } = require("process");

main()
.then(()=>{
    console.log("Connectin Successfull!!");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/fakewhatsapp');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

// let chat1=new Chat({
//     from:"Apurv",
//     to:"Avdhut",
//     msg:"Hello Send me your notes!",
//     created_at:new Date()
// })
// chat1
// .save()
// .then((res)=>{
//     console.log(res);
// })

app.listen(port,(req,res)=>{
    console.log(`app is listening on port ${port}`);
})

app.get("/",(req,res)=>{
    res.send("Home page working correctly!!!");
})

//INDEX ROUTE
app.get("/chats",async(req,res)=>{
    try{
        let chats=await Chat.find();
    
    res.render("index.ejs",{chats});
    }catch(err){
        next(err);
    }
    
})

app.get("/chats/new",async(req,res)=>{
    // throw new ExpressError(404,"page not found");
    res.render("new.ejs");
})

app.post("/chats",async(req,res,next)=>{
    try{
         let{from,to,msg}=req.body;
    let newchat=new Chat({
        from:from,
        to:to,
        msg:msg,
        created_at:new Date()
    });

     await newchat
    .save()
    .then(()=>{
        console.log("Data was saved!!");
         res.redirect("/chats");
    })
 }catch(err){
    next(err);
 }

   
});

function asyncWrap(fn){
    return function(req,res,next){
        fn(req,res,next).catch((err)=>next(err));
    };
}


//NEW-Show route
app.get("/chats/:id",asyncWrap(async (req,res,next)=>{
    let {id}=req.params;
  
         let chat=await Chat.findById(id);
    if(!chat){
        next(new ExpressError(404,"chat not found"));
    }
    res.render("edit.ejs",{chat});
    
   
}));

//edit route
app.get("/chats/:id/edit",async (req,res)=>{
    try{
       let {id}=req.params;
    let chat=await Chat.findById(id);
    res.render("edit.ejs",{chat}); 
    }catch(err){
        next(err);
    }
    
})
//updateroute
app.put("/chats/:id",async (req,res)=>{
    try{
        let {id}=req.params;
    let{msg:newmsg}=req.body;
    
    let updatechat=await Chat.findByIdAndUpdate(id,
        {msg:newmsg},
        {runValidators:true,new:true}
    );
    console.log(updatechat);
    res.redirect("/chats");
    }catch(err){
        next(err);
    }
    
})

//destoy route

app.delete("/chats/:id",async(req,res)=>{
    try{
        let{id}=req.params;
    let deletedchat=await Chat.findByIdAndDelete(id);
    console.log(deletedchat);
    res.redirect("/chats");
    }catch(err){
        next(err);
    }
})

const handlevalidation=(err)=>{
    console.log("validation error occured! follow below instructions");
    console.log(err.message);
    return err;
};

//Error name identifier middleware
app.use((err,req,res,next)=>{
    console.log(err.name);
    if(err.name==="ValidationError"){
        err=handlevalidation(err);
    }
    next(err);
})



//Error handling middleware
app.use((err,req,res,next)=>{
    let{status=500,message="Some Error Occured"}=err;
    res.status(status).send(message);
})

