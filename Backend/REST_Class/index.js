const express=require("express");
const app=express();
const path = require("path");
const methodoverride=require("method-override");
let port=8080;
const { v4: uuidv4 } = require('uuid');
app.use(express.urlencoded({extended:true}));
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));
app.use(express.static("public"));
app.use(methodoverride('_method'))
app.use(express.static(path.join(__dirname,"public")));

app.listen(port,()=>{
    console.log("app is listening on port 8080");
})

let posts=[
    {
        id:uuidv4(),
        username:"apurv_ranjane",
        content:"Computer Engineering ,Third year student!!",
    },
    {
        id:uuidv4(),
        username:"apna_college",
        content:"Started various courses of DSA and Full stack development!!",
    },
     {
        id:uuidv4(),
        username:"virat_kohli",
        content:"Hard Working,passionate cricketer!!!",
    }
]

app.get("/posts",(req,res)=>{
    res.render("index.ejs",{posts});
})

app.get("/posts/new",(req,res)=>{
    res.render("new.ejs");
})

app.post("/posts",(req,res)=>{
    let {username,content}=req.body;
     let id=uuidv4();
    posts.push({id,username,content});
    res.redirect("/posts");
})

app.get("/posts/:id",(req,res)=>{
    let{id}=req.params;
    let post=posts.find((P)=>id===P.id);
    res.render("show.ejs",{post});
})

app.patch("/posts/:id",(req,res)=>{
    let {id}=req.params;
    let newcontent=req.body.content;
    let post=posts.find((P)=>id===P.id);
    post.content=newcontent;
    console.log(post);
    res.redirect("/posts");
})

app.get("/posts/:id/edit",(req,res)=>{
    let{id}=req.params;
     let post=posts.find((P)=>id===P.id);
     res.render("edit.ejs",{post})
})

app.delete("/posts/:id",(req,res)=>{
    let{id}=req.params;
    posts=posts.filter((P)=>id !==P.id);
     res.redirect("/posts");
})