const express=require("express");
const app=express();

let port=3000;

app.set("view engine","ejs");

app.get("/",(req,res)=>{
    res.render("home.ejs");

})

app.get("/diceval",(req,res)=>{
    let diceval=Math.floor(Math.random()*6+1);
    
    res.render("diceval.ejs",{diceval});

})

app.get("/ig/:username",(req,res)=>{
    let {username}=req.params;
    // const followers=["Virat kohli","Ms Dhoni","Rohit Sharma"];
    const instadata=require("./data.json");
    const data=instadata[username];
    if(data){
    res.render("instagram.ejs",{data});
    }
    else{
        res.render("error.ejs");
    }
})


app.listen(port,()=>{
    console.log(`app is listening on port ${port}`);
})